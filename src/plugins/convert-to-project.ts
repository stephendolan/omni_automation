/*{
    "author": "Stephen Dolan",
    "targets": ["omnifocus"],
    "type": "action",
    "identifier": "com.stephendolan.convert-to-project",
    "version": "0.1",
    "description": "Convert a task to a project.",
    "label": "Convert to Project",
    "mediumLabel": "Convert to Project",
    "longLabel": "Convert to Project",
    "paletteLabel": "Convert to Project",
    "image": "arrow.triangle.branch"
}*/

(() => {
  function moveTasks(tasks: Task[], destination: Project | Task) {
    tasks.forEach((task) => {
      const newTask = new Task(task.name, destination);

      if (task.note) {
        newTask.note = task.note;
      }

      if (task.dueDate) {
        newTask.dueDate = task.dueDate;
      }

      if (task.deferDate) {
        newTask.deferDate = task.deferDate;
      }

      if (task.flagged) {
        newTask.flagged = true;
      }

      if (task.estimatedMinutes) {
        newTask.estimatedMinutes = task.estimatedMinutes;
      }

      if (task.repetitionRule) {
        newTask.repetitionRule = task.repetitionRule;
      }

      if (task.children.length > 0) {
        moveTasks(task.children, newTask);
      }
    });
  }

  let action = new PlugIn.Action(function (selection: any, _sender: any) {
    try {
      const task = selection.tasks[0];
      const hasChildren = task.children.length > 0;

      const form = new Form();
      (form as any).title = "Convert to Project";

      form.addField(new Form.Field.String("projectTitle", "Project Title", task.name, null), null);

      // Get top-level folders, excluding any dropped folders
      const topLevelFolders = (window as any).flattenedFolders.filter((folder: Folder) => {
        return folder.parent === null && folder.status !== Folder.Status.Dropped;
      });

      // Get second-level folders, excluding any dropped folders
      const secondLevelFolders = (window as any).flattenedFolders.filter((folder: Folder) => {
        return (
          folder.parent !== null &&
          folder.parent.parent === null &&
          folder.status !== Folder.Status.Dropped
        );
      });

      // Create a list of folder names
      const folderNames = topLevelFolders
        .concat(secondLevelFolders)
        .map((folder: Folder) => folder.name)
        .sort((a: string, b: string) => {
          // Sort by whether the folder name contains "Active" first
          const aHasActive = a.includes("Active");
          const bHasActive = b.includes("Active");

          if (aHasActive && !bHasActive) {
            return -1;
          } else if (!aHasActive && bHasActive) {
            return 1;
          } else {
            // Then sort alphabetically
            return a.localeCompare(b);
          }
        });

      form.addField(
        new Form.Field.Option("folderName", "Folder", folderNames, null, folderNames[0], null), 
        null
      );

      if (hasChildren) {
        form.addField(
          new Form.Field.Checkbox(
            "addTaskToProject",
            "Add original task to project",
            false
          ),
          null
        );
      }

      form.validate = function (formObject: any): boolean {
        return formObject.values["projectTitle"].length > 0;
      };

      form.show("Create", "Cancel").then((formPromise: any) => {
        const values = formPromise.values;

        // Find the folder by name
        const folder = ((window as any).flattenedFolders as Folder[]).find(
          (folder: Folder) => folder.name === values["folderName"]
        );

        if (!folder) {
          throw new Error(`Folder "${values["folderName"]}" not found`);
        }

        // Create a new project in the selected folder
        const project = new Project(values["projectTitle"], folder);

        // Copy properties from the task to the project
        if (task.note) {
          project.note = task.note;
        }

        if (task.dueDate) {
          project.dueDate = task.dueDate;
        }

        if (task.deferDate) {
          project.deferDate = task.deferDate;
        }

        if (task.flagged) {
          project.flagged = true;
        }

        // Move children to the project
        if (hasChildren) {
          moveTasks(task.children, project);
        }

        // Add the original task to the project if requested
        if (hasChildren && values["addTaskToProject"]) {
          const newTask = new Task(task.name, project);
          if (task.note) {
            newTask.note = task.note;
          }
        }

        // Delete the original task
        task.remove();
      });
    } catch (err: any) {
      if (!err.causedByUserCancelling) {
        const alert = new Alert("Error", err.message);
        alert.show(() => {});
      }
    }
  });

  action.validate = function (selection: any, _sender: any) {
    return selection.tasks.length === 1;
  };

  return action;
})(); 