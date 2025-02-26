declare namespace ProjectConverter {
  interface FormValues {
    projectTitle: string;
    folderName: string;
    addToProject?: boolean;
    newTaskTitle?: string;
  }

  interface FormObject {
    values: FormValues;
  }
} 