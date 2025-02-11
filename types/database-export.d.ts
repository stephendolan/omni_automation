declare namespace Types {
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
    }

    interface FolderJson {
        id: string;
        name: string;
        type: 'Folder';
        folders: FolderJson[];
        projects: ProjectJson[];
    }

    interface PerspectiveTaskJson {
        id: string;
        name: string;
        type: 'Task';
        status: string;
        permalink: string;
        projectName: string | null;
        folderName: string | null;
        dueDate: string | null;
        deferDate: string | null;
        flagged: boolean;
        tags: string[];
    }

    interface DatabaseJson {
        timestamp: string;
        folders: FolderJson[];
        perspectives: {
            next: PerspectiveTaskJson[] | null;
            forecast: PerspectiveTaskJson[] | null;
            agendas: PerspectiveTaskJson[] | null;
            badWaiting: PerspectiveTaskJson[] | null;
            noAction: PerspectiveTaskJson[] | null;
        };
    }
} 