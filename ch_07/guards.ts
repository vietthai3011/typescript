type FileSource = { type: "file"; path: string };
const fileSource: FileSource = {
    type: "file",
    path: "some/images/hemmo.svg",
};

type DBSource = { type: "database"; connectionURL: string };
const dbSource: DBSource = {
    type: "database",
    connectionURL: "driver.mysql.hello",
};

type Source = FileSource | DBSource;

function isFile(source: Source): source is FileSource {
    return source.type === "file";
}

function loadData(source: Source) {
    if (isFile(source)) {
        console.log(source.path);
        return;
    }

    console.log(source.connectionURL);
}


class User {
    constructor(public name: string) {
    }

    join() {
    }
}

class Admin {
    constructor(public permissions: string[]) {
    }

    scan() {
    }
}

const user = new User("Thai");
const admin = new Admin(["ban", "restore"]);

type Entity = User | Admin;

function init(entity: Entity) {
    if (entity instanceof User) {
        entity.join();
        return;
    }

    entity.scan();
}