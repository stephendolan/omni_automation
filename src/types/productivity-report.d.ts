declare namespace ProductivityReport {
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
