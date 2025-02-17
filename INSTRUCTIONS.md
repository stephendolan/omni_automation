# JSON Task Export

This document describes the schema and semantics of the OmniFocus task export JSON format. This format is designed to be AI-assistant friendly, providing rich context about tasks, projects, and organizational structure.

## Schema Overview

The export provides a hierarchical view of your OmniFocus database, including:

- Folder structure (areas of responsibility/life areas)
- Projects and their tasks
- Task hierarchies (tasks and subtasks)
- Perspective-based task lists (different views/filters of tasks)

## Root Structure

```typescript
{
  // ISO 8601 timestamp of when the export was generated
  timestamp: string,

  // Hierarchical structure of folders (areas of responsibility)
  folders: FolderJson[],

  // Different views/collections of tasks based on OmniFocus perspectives
  perspectives: Array<{
    // Name of the perspective
    name: string,

    // Description of what this perspective represents
    description: string,

    // Tasks/projects in this perspective
    items: (TaskJson | ProjectJson)[] | null
  }>
}
```

The perspectives are ordered by priority for triage:

1. **Bad Waiting**: Delegated items without a due date to follow up. Triage immediately.
2. **No Action**: Projects without a next action. Triage immediately.
3. **Inbox**: Unprocessed items awaiting review and organization.
4. **Forecast**: Calendar-aligned view of upcoming deadlines and time-specific tasks.
5. **Next**: Available next actions across all projects.

## Task Schema (TaskJson)

```typescript
{
  // Unique identifier for the task
  id: string,

  // Name/title of the task
  name: string,

  // Always 'Task' for task objects
  type: 'Task',

  // Current status: "Active", "Blocked", "Next", "Available", "DueSoon"
  // Note: Dropped and Completed tasks are excluded from export
  status: string,

  // Deep link to open this task in OmniFocus
  permalink: string,

  // Whether the task is completed (based on effectiveCompletionDate)
  completed: boolean,

  // Completion date in ISO 8601 format, if completed
  completionDate: string | null,

  // Due date in ISO 8601 format, if set
  dueDate: string | null,

  // Defer/start date in ISO 8601 format, if set
  deferDate: string | null,

  // Whether the task is flagged (starred/important)
  flagged: boolean,

  // Task notes/description
  notes: string,

  // Array of tag names associated with the task
  tags: string[],

  // Estimated duration in minutes, if set
  estimatedMinutes: number | null,

  // Whether subtasks must be completed in sequence
  sequential: boolean,

  // Repetition rule if task repeats
  repetitionRule: {
    // How the task repeats: "Fixed", "Start", or "Due"
    method: string,

    // Human-readable repetition pattern
    rule: string
  } | null,

  // Subtasks/child tasks
  children: TaskJson[],

  // Only present in perspective results:
  projectName?: string | null,  // Name of containing project
  folderName?: string | null    // Name of parent folder
}
```

## Project Schema (ProjectJson)

```typescript
{
  // Unique identifier for the project
  id: string,

  // Name/title of the project
  name: string,

  // Always 'Project' for project objects
  type: 'Project',

  // Current status: "Active", "OnHold"
  // Note: Done and Dropped projects are excluded from export
  status: string,

  // Deep link to open this project in OmniFocus
  permalink: string,

  // Whether the project is completed
  completed: boolean,

  // Completion date in ISO 8601 format, if completed
  completionDate: string | null,

  // Defer/start date in ISO 8601 format, if set
  deferDate: string | null,

  // Due date in ISO 8601 format, if set
  dueDate: string | null,

  // Whether the project is flagged (starred/important)
  flagged: boolean,

  // Project notes/description
  notes: string,

  // Whether tasks must be completed in sequence
  sequential: boolean,

  // Tasks in this project
  tasks: TaskJson[]
}
```

## Folder Schema (FolderJson)

```typescript
{
  // Unique identifier for the folder
  id: string,

  // Name of the folder (usually represents an area of responsibility)
  name: string,

  // Always 'Folder' for folder objects
  type: 'Folder',

  // Subfolders within this folder
  folders: FolderJson[],

  // Projects within this folder
  projects: ProjectJson[]
}
```

## AI Assistant Guidelines

When working with this data:

1. **Task Status Interpretation**:

   - "Next" tasks are explicitly chosen as important next actions
   - "Available" tasks are ready to be worked on
   - "DueSoon" tasks are approaching their due date
   - "Active" tasks are in active projects but might be dependent on other tasks

2. **Task Dependencies**:

   - Tasks with `sequential: true` indicate their subtasks must be done in order
   - First tasks in sequential lists are blocking tasks that should be prioritized
   - Projects with `sequential: true` indicate their tasks must be done in order

3. **Time Sensitivity**:

   - Check `dueDate` for deadline-driven tasks
   - Use `deferDate` to identify tasks that shouldn't be started yet
   - The `forecast` perspective shows time-relevant tasks

4. **Task Importance**:

   - `flagged: true` indicates manually flagged important tasks
   - Perspectives in the output are ordered by priority
   - Consider both project and task status for context

5. **Organization**:

   - Folders typically represent areas of life or responsibility
   - Projects represent outcomes requiring multiple steps
   - Tags provide cross-cutting categorization
   - Task management generally follows the Getting Things Done methodology

6. **Deep Linking**:
   - Use the `permalink` URLs to reference specific tasks/projects in OmniFocus
   - Links follow format: `omnifocus:///task/[id]`
