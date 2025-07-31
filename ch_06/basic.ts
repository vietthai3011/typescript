class User {
    constructor(private _name: string, private _age: number, private _hobbies: (string)[]) {
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }

    get hobbies(): string[] {
        return this._hobbies;
    }

    set hobbies(value: string[]) {
        this._hobbies = value;
    }
}

const user = new User("Thai", 22, ["cooking", "swim"]);

user.hobbies = ["1"];

const a: readonly string[] = [];

console.log(user.name);
console.log(user.age);
console.log(user.hobbies);
