declare namespace DatabaseExport {
    interface TaskJson {
        id: string;
        name: string;
        type: 'Task';
        status: string;
        permalink: string;
        completed: boolean;
        completionDate: string | null;
        dueDate: string | null;
        deferDate: string | null;
        flagged: boolean;
        notes: string;
        tags: string[];
        estimatedMinutes: number | null;
        sequential: boolean;
        repetitionRule: {
            method: string;
            rule: string;
        } | null;
        children: TaskJson[];
        projectName?: string | null;
        folderName?: string | null;
    }

    interface ProjectJson {
        id: string;
        name: string;
        type: 'Project';
        status: string;
        permalink: string;
        completed: boolean;
        completionDate: string | null;
        deferDate: string | null;
        dueDate: string | null;
        flagged: boolean;
        notes: string;
        sequential: boolean;
        tasks: TaskJson[];
        folderName?: string | null;
    }

    interface FolderJson {
        id: string;
        name: string;
        status: string;
        type: 'Folder';
        folders: FolderJson[];
        projects: ProjectJson[];
    }

    interface DatabaseJson {
        timestamp: string;
        folders: FolderJson[];
        perspectives: {
            name: string;
            description: string;
            items: (TaskJson | ProjectJson)[] | null;
        }[];
    }
} 