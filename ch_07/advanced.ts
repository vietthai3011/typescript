type DataStore = {
    [prop: string]: string | number;
}

let store: DataStore = {};

store.id = 5;
store.name = "Thai";

let someObj: Record<string, number | string>;

let roles = ["admin", "guest", "editor"] as const;

const permission: (typeof roles[number]) = "editor";


const dataEntries = {
    entry1: 0.51,
    entry2: -1.23,
} satisfies Record<string, number>;

dataEntries.entry1;

