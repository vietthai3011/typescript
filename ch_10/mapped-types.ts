// type Operations = {
//     add?: (a: number, b: number) => number;
//     subtract?: (a: number, b: number) => number;
// };

// type Results<T> = {
//     readonly [key in keyof T]-?: number;
// };

type Operations = {
    readonly add: (a: number, b: number) => number;
    readonly subtract: (a: number, b: number) => number;
};

type Results<T> = {
    -readonly [key in keyof T]?: number;
};

let mathOperations: Operations = {
    add(a, b) {
        return a + b;
    },

    subtract(a, b) {
        return a - b;
    },
};

const results: Results<Operations> = {
    add: mathOperations.add(1, 2),
    subtract: mathOperations.subtract(5, 4),
};

results.add = 123;
