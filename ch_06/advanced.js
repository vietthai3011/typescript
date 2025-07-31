"use strict";
class User {
    _firstName;
    _lastName;
    constructor(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    get fullName() {
        return this._firstName + " " + this._lastName;
    }
}
const thai = new User("Ngo", "Thai");
console.log(thai.fullName);
