function logger<T extends new (...args: any[]) => any>(target: T, context: ClassDecoratorContext) {
    console.log(target);
    console.log(context);

    return class extends target {
        constructor(...args: any) {
            super();
            console.log("Class constructor");
        }
    };
}

function autoBind(target: Function, context: ClassMethodDecoratorContext) {
    context.addInitializer(function (this: any) {
        this[context.name] = this[context.name].bind(this);
    });

    return function (this: any) {
        target.apply(this);
    };
}

function replacer() {
    return function replacerDecorator(target: undefined, context: ClassFieldDecoratorContext) {
        console.log(target);

        console.log(context);

        return (initialValue: any) => {
            console.log(initialValue);
            return `${initialValue}- HEllo`;
        };
    };
}

@logger
class Person {
    @replacer()
    name = "Thai";

    constructor() {}

    @autoBind
    greet() {
        console.log("Hi, i am " + this.name);
    }
}

const thai = new Person();
thai.greet();
console.log(thai.name);
