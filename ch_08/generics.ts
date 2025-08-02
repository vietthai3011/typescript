"use strict";

let names: Array<string> = ["Thai", "Jone"];

type DataStore<T> = {
    [key: string]: T;
};

let store: DataStore<string | number> = {};
store.name = "123";
store.age = 12;

interface ApiResponse<T> {
    status: string;
    data: T;
}

function merge<T, U>(a: T, b: U) {
    return [a, b];
}

const ids = merge(1, "2");

console.log(typeof ids[1]);
console.log((ids[1] as string).length);

function mergeObj<T extends object, U extends object>(a: T, b: U) {
    return {...a, ...b};
}

const merged = mergeObj({name: "Thai", age: 25}, {job: "Software Engineer"});
console.log(merge);

class User<T> {
    constructor(public id: T) {
    }
}

const user = new User(1);















