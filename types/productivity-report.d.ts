declare namespace ProductivityReport {
  interface FormValues {
    summaryType: string;
  }

  interface FormObject {
    values: FormValues;
  }

  interface ReportData {
    date: string;
    totalCompletedTasks: number;
    inboxTasks: number;
    projectTasks: number;
    progressedProjects: string[];
    completedProjects: string[];
    completedTasksWithDueDates: number;
    unfinishedTasksWithTodaysDueDate: number;
  }
} 