class User {
    constructor(private _firstName: string, private _lastName: string) {
    }

    get fullName(): string {
        return this._firstName + " " + this._lastName;
    }

    public greeting() {
        console.log("Hello");
    }
}

const thai = new User("Ngo", "Thai");
console.log(thai.fullName);


class Employee extends User {
    constructor(private firstName: string, lastName: string) {
        super(firstName, lastName);
    }

    greeting() {
        super.greeting();
    }
}