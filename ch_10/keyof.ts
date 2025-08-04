type User = {
    name: string;
    age: {};
};

type UserKeys = keyof User;

const a: UserKeys = "name";

const b = 1 === 1;

function getProp<T extends object, U extends keyof T>(obj: T, key: U) {
    const val = obj[key];
}

const user = {
    name: "Thai",
    age: 22,
};

const val = getProp(user, "name");
