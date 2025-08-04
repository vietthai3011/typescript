const mainUserName = "Thai";

const greeting = `Hi there, ${mainUserName}`;

type ReadPermission = "no-read" | "read";
type WritePermission = "no-write" | "write";

type FilePermissions = `${ReadPermission}-${WritePermission}`;

type DataFile = {
    data: string;
    permission: FilePermissions;
};

type DataFileEventsNames = `${keyof DataFile}Change`;

type DataFileEvents<T> = {
    [Key in DataFileEventsNames]: () => void;
};
