declare namespace ProductivityReport {
  interface FormValues {
    summaryType: string;
    webhookUrl?: string;
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

// Extend the global URL namespace to include FetchRequest
interface URL {
  FetchRequest: {
    fromString(url: string): any;
  };
}

// Extend the Credential type
interface Credential {
  password: string;
} 