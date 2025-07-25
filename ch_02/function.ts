function add(a: number, b: number): number {
    return a + b;
}


function logThrow(): never {
    console.log(123);
    throw new Error("123");
}


function performJob(cb: () => void) {
    cb();
}