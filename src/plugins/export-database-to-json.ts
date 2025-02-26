/*{
    "author": "Stephen Dolan",
    "targets": ["omnifocus"],
    "type": "action",
    "identifier": "com.stephendolan.export-database-to-json",
    "version": "0.1",
    "description": "Exports database to JSON format.",
    "label": "JSON Export",
    "mediumLabel": "Export to JSON",
    "longLabel": "Export Database to JSON",
    "paletteLabel": "Export to JSON",
    "image": "square.and.arrow.up"
}*/

(() => {
  let action = new PlugIn.Action(function (_selection: any, _sender: any) {
    const formatDate = (date: Date | null) => {
      return date ? date.toISOString() : null;
    };

    const getTaskStatusString = (status: Task.Status) => {
      if (status === Task.Status.Active) return "Active";
      if (status === Task.Status.Blocked) return "Blocked";
      if (status === Task.Status.Dropped) return "Dropped";
      if (status === Task.Status.Completed) return "Completed";
      if (status === Task.Status.Next) return "Next";
      if (status === Task.Status.Available) return "Available";
      if (status === Task.Status.DueSoon) return "DueSoon";
      return "Unknown";
    };

    const getProjectStatusString = (status: Project.Status) => {
      if (status === Project.Status.Active) return "Active";
      if (status === Project.Status.Done) return "Done";
      if (status === Project.Status.Dropped) return "Dropped";
      if (status === Project.Status.OnHold) return "OnHold";
      return "Unknown";
    };

    const getFolderStatusString = (status: Folder.Status) => {
      if (status === Folder.Status.Active) return "Active";
      if (status === Folder.Status.Dropped) return "Dropped";
      return "Unknown";
    };

    const getPermalink = (object: Task | Project) => {
      return `omnifocus:///task/${object.id.primaryKey}`;
    };

    const getRepetitionMethodString = (method: Task.RepetitionMethod) => {
      if (method === Task.RepetitionMethod.Fixed) return "Fixed";
      if (method === (Task.RepetitionMethod as any).Start) return "Start";
      if (method === (Task.RepetitionMethod as any).Due) return "Due";
      return "Unknown";
    };

    const shouldSkipTask = (task: Task): boolean => {
      return task.taskStatus === Task.Status.Dropped || task.taskStatus === Task.Status.Blocked || task.effectiveCompletionDate !== null;
    };

    const taskToJson = (task: Task): DatabaseExport.TaskJson | null => {
      const effectivelyCompleted = task.effectiveCompletionDate !== null;

      if (shouldSkipTask(task)) {
        return null;
      }

      return {
        id: task.id.primaryKey,
        name: task.name,
        type: "Task",
        status: getTaskStatusString(task.taskStatus),
        permalink: getPermalink(task),
        completed: effectivelyCompleted,
        completionDate: formatDate(task.effectiveCompletionDate),
        dueDate: formatDate(task.effectiveDueDate),
        deferDate: formatDate(task.effectiveDeferDate),
        flagged: task.flagged,
        notes: task.note,
        tags: task.tags.map((tag) => tag.name),
        estimatedMinutes: task.estimatedMinutes,
        sequential: task.sequential,
        repetitionRule: task.repetitionRule
          ? {
              method: getRepetitionMethodString(task.repetitionRule.method),
              rule: task.repetitionRule.ruleString,
            }
          : null,
        children: task.children.map((child) => taskToJson(child)).filter((child): child is DatabaseExport.TaskJson => child !== null),
        projectName: task.containingProject ? task.containingProject.name : null,
        folderName: task.containingProject?.parentFolder?.name || null,
      };
    };

    const shouldSkipProject = (project: Project): boolean => {
      return (
        project.status === Project.Status.Done ||
        project.effectiveCompletedDate !== null ||
        project.status === Project.Status.OnHold ||
        project.status === Project.Status.Dropped
      );
    };

    const projectToJson = (project: Project): DatabaseExport.ProjectJson | null => {
      const effectivelyCompleted = project.effectiveCompletedDate !== null;

      if (shouldSkipProject(project)) {
        return null;
      }

      const tasks = project.tasks.map((task) => taskToJson(task)).filter((task): task is DatabaseExport.TaskJson => task !== null);

      return {
        id: project.id.primaryKey,
        name: project.name,
        type: "Project",
        status: getProjectStatusString(project.status),
        permalink: getPermalink(project),
        completed: effectivelyCompleted,
        completionDate: formatDate(project.effectiveCompletedDate),
        deferDate: formatDate(project.deferDate),
        dueDate: formatDate(project.dueDate),
        flagged: project.flagged,
        notes: project.note,
        sequential: project.sequential,
        tasks: tasks,
        folderName: project.parentFolder ? project.parentFolder.name : null,
      };
    };

    const shouldSkipFolder = (folder: Folder, projects: DatabaseExport.ProjectJson[], subfolders: DatabaseExport.FolderJson[]): boolean => {
      return folder.status === Folder.Status.Dropped || (projects.length === 0 && subfolders.length === 0);
    };

    const folderToJson = (folder: Folder): DatabaseExport.FolderJson | null => {
      const projects = folder.projects.map((project) => projectToJson(project)).filter((project): project is DatabaseExport.ProjectJson => project !== null);

      const subfolders = folder.folders.map((subfolder) => folderToJson(subfolder)).filter((subfolder): subfolder is DatabaseExport.FolderJson => subfolder !== null);

      if (shouldSkipFolder(folder, projects, subfolders)) {
        return null;
      }

      return {
        id: folder.id.primaryKey,
        name: folder.name,
        status: getFolderStatusString(folder.status),
        type: "Folder",
        folders: subfolders,
        projects: projects,
      };
    };

    const getPerspectiveData = (perspective: Perspective.BuiltIn | Perspective.Custom): (DatabaseExport.TaskJson | DatabaseExport.ProjectJson)[] | null => {
      try {
        // Get the first window
        const window = (document as any).windows[0];
        if (!window) {
          console.error("No window available");
          return null;
        }

        // Set the perspective
        window.perspective = perspective;

        // Get the content tree
        const tree = window.content;
        if (!tree) {
          console.error("No content tree available");
          return null;
        }

        const items: (DatabaseExport.TaskJson | DatabaseExport.ProjectJson)[] = [];

        // Walk the tree and collect tasks and projects
        tree.rootNode.apply((node: any) => {
          const item = node.object;

          if (item instanceof Task) {
            const taskJson = taskToJson(item);
            if (taskJson) {
              items.push(taskJson);
            }
          } else if (item instanceof Project) {
            const projectJson = projectToJson(item);
            if (projectJson) {
              items.push(projectJson);
            }
          }
        });

        return items;
      } catch (error) {
        console.error(`Error getting perspective ${perspective.name}:`, error);
        return null;
      }
    };

    const perspectives = [
      {
        name: "Bad Waiting",
        perspective: Perspective.Custom.byName("Bad Waiting"),
        description: "Delegated items without a due date to follow up. Triage immediately.",
      },
      {
        name: "No Action",
        perspective: Perspective.Custom.byName("No Action"),
        description: "Projects without a next action. Triage immediately.",
      },
      {
        name: "Inbox",
        perspective: Perspective.BuiltIn.Inbox,
        description: "Unprocessed items awaiting review and organization.",
      },
      {
        name: "Forecast",
        perspective: Perspective.BuiltIn.Forecast,
        description: "Calendar-aligned view of upcoming deadlines and time-specific tasks.",
      },
      {
        name: "Next",
        perspective: Perspective.Custom.byName("Next"),
        description: "Available next actions across all projects.",
      },
    ];

    const output: DatabaseExport.DatabaseJson = {
      timestamp: new Date().toISOString(),
      perspectives: perspectives.map(({ name, perspective, description }) => ({
        name,
        description,
        items: perspective ? getPerspectiveData(perspective) : null,
      })),
      folders: ((window as any).folders as Folder[]).map((folder: Folder) => folderToJson(folder)).filter((folder): folder is DatabaseExport.FolderJson => folder !== null),
    };

    // Convert to JSON string with pretty printing
    const jsonString = JSON.stringify(output, null, 2);

    // Copy to clipboard
    Pasteboard.general.string = jsonString;

    // Show confirmation
    new Alert("Database Exported", "The database has been exported to your clipboard in JSON format.").show(() => {});

    console.log("Export completed successfully");
  });

  action.validate = function (_selection: any, _sender: any): boolean {
    return true;
  };

  return action;
})(); 