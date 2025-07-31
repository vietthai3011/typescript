"use strict";
class User {
    _name;
    _age;
    _hobbies;
    constructor(_name, _age, _hobbies) {
        this._name = _name;
        this._age = _age;
        this._hobbies = _hobbies;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
    get hobbies() {
        return this._hobbies;
    }
    set hobbies(value) {
        this._hobbies = value;
    }
}
const user = new User("Thai", 22, ["cooking", "swim"]);
user.hobbies = ["1"];
const a = [];
console.log(user.name);
console.log(user.age);
console.log(user.hobbies);
