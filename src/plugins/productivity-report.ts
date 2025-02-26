/*{
    "author": "OmniAutomation Assistant",
    "targets": ["omnifocus"],
    "type": "action",
    "identifier": "com.omnifocus.assistant.productivityReport",
    "version": "1.0",
    "description": "This script provides an overview of the completed tasks for the current day or week.",
    "label": "Productivity Report",
    "mediumLabel": "Productivity Report",
    "paletteLabel": "Productivity Report",
    "image": "arrow.up.doc"
}*/

interface WebhookFormValues {
    webhookUrl: string;
}

(() => {
  const webhookService = "com.omnifocus.assistant.webhook";
  const credentials = new Credentials();

  async function retrieveOrRequestWebhookUrl(): Promise<string> {
    const credential = await credentials.read(webhookService);
    if (!credential) {
      const inputForm = new Form();
      const webhookField = new Form.Field.String("webhookUrl", "Webhook URL", "", null);
      inputForm.addField(webhookField, null);
      const formPrompt = "Enter Webhook URL where results should be sent:";
      const formObject = (await inputForm.show(formPrompt, "Continue"));
      
      const webhookUrl = (formObject.values as WebhookFormValues)["webhookUrl"];
      if (webhookUrl) {
        await credentials.write(webhookService, "user", webhookUrl);
        return webhookUrl;
      }
      return "";
    } else {
      return (credential as any).password;
    }
  }

  function getDaySuffix(day: number): string {
    if (day >= 11 && day <= 13) {
      return "th";
    }
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }

  function fullProjectPath(project: Project): string {
    let path = project.name;
    let parent = project.parentFolder;

    while (parent) {
      path = parent.name + " : " + path;
      parent = parent.parent;
    }

    return path;
  }

  function getWeekStartDate(date: Date): Date {
    const d = new Date(date);
    const day = d.getDay();
    const diff = d.getDate() - day + (day == 0 ? -6 : 1); // Adjust if day is Sunday
    return new Date(d.setDate(diff));
  }

  function formatDate(date: Date): string {
    const d = new Date(date);
    const month = d.toLocaleString("default", { month: "long" });
    const day = d.getDate();
    const suffix = getDaySuffix(day);
    return `${month} ${day}${suffix}`;
  }

  function generateReport(summaryType: string): void {
    let today = new Date();
    let startDateString: string, endDateString: string, dateLabel: string;
    let startDate: Date, endDate: Date;

    if (summaryType === "Daily") {
      startDate = new Date(today);
      endDate = new Date(today);
      startDate.setHours(0, 0, 0, 0);
      endDate.setHours(23, 59, 59, 999);
      startDateString = endDateString = formatDate(today);
      dateLabel = `${startDateString}`;
    } else if (summaryType === "Weekly") {
      startDate = getWeekStartDate(today);
      startDate.setHours(0, 0, 0, 0);
      endDate = today;
      endDate.setHours(23, 59, 59, 999);
      startDateString = formatDate(getWeekStartDate(today));
      endDateString = formatDate(today);
      dateLabel = `${startDateString} to ${endDateString}`;
    } else {
      return;
    }

    // Filter tasks based on the date range
    let completedTasks = flattenedTasks.filter((task) => {
      let isDropped = task.effectiveDropDate != null;
      let isCompleted = task.effectiveCompletionDate != null;

      return !isDropped && isCompleted && task.effectiveCompletionDate >= startDate && task.effectiveCompletionDate <= endDate;
    });

    // Count tasks with no project (Inbox tasks)
    let inboxTasksCount = completedTasks.filter((task) => !task.containingProject).length;

    // Count tasks with a project
    let projectTasksCount = completedTasks.length - inboxTasksCount;

    // Determine progressed projects and mark completed ones
    let progressedProjects: string[] = [];
    let completedProjects: string[] = [];
    completedTasks.forEach((task) => {
      const project = task.containingProject;

      if (project === null) {
        return;
      }

      let projectName = fullProjectPath(project);

      if (project.completed) {
        completedProjects.push(`${projectName}`);
      } else {
        progressedProjects.push(`${projectName}`);
      }
    });

    const uniqueProgressedProjects = [...new Set(progressedProjects.sort())];
    const uniqueCompletedProjects = [...new Set(completedProjects.sort())];

    // Tasks with due dates completed during the selected period
    let dueTasksCount = completedTasks.filter((task) => task.dueDate).length;

    // Tasks with due dates that weren't finished during the selected period
    let unfinishedDueTasks = flattenedTasks.filter((task) => {
      let isDropped = task.effectiveDropDate != null;
      let isCompleted = task.effectiveCompletionDate != null;

      return !isDropped && !isCompleted && task.effectiveDueDate && task.effectiveDueDate <= endDate;
    });

    let data: ProductivityReport.ReportData = {
      date: dateLabel,
      totalCompletedTasks: completedTasks.length,
      inboxTasks: inboxTasksCount,
      projectTasks: projectTasksCount,
      progressedProjects: uniqueProgressedProjects,
      completedProjects: uniqueCompletedProjects,
      completedTasksWithDueDates: dueTasksCount,
      unfinishedTasksWithTodaysDueDate: unfinishedDueTasks.length,
    };

    retrieveOrRequestWebhookUrl()
      .then((webhookUrl) => {
        let request = (URL as any).FetchRequest.fromString(webhookUrl);
        request.method = "POST";
        request.bodyString = JSON.stringify(data);
        request.headers = { "Content-Type": "application/json" };

        console.log(`Sending request to ${webhookUrl} with data: ${request.bodyString}...`);

        request.fetch();
      })
      .catch((error) => {
        console.error("Error handling webhook URL:", error);
      });
  }

  const action = new PlugIn.Action(function (selection: any, sender: any) {
    if (sender) {
      let form = new Form();
      let summaryTypeField = new Form.Field.Option("summaryType", "Summary Type", ["Daily", "Weekly"], null, "Daily", null);
      form.addField(summaryTypeField, null);

      form.show("Choose Summary Type", "Continue").then((formResult: any) => {
        let summaryType = formResult.values["summaryType"];
        generateReport(summaryType);
      });
    } else {
      generateReport("Daily");
    }
  });

  action.validate = function (_selection: any, _sender: any): boolean {
    return true;
  };

  return action;
})();
