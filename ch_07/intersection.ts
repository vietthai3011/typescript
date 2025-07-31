type FileData = {
    path: string;
    content: string;
};

type DatabaseType = {
    connectionUrl: string;
    credentials: string;
};

type Status = {
    isOpen: boolean;
    errorMessage?: string;
};

type AccessFileData = FileData & Status;
type AccessDatabase = DatabaseType & Status;
