function generateError(msg?: string) {
    throw new Error(msg);
}

let input = null;
const didProvideInput = input ?? false;