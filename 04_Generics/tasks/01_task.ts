function toStringElement<T>(data: T): string | undefined {
    if (typeof data === "string") {
        return data;
    }

    if(
        typeof data === "number" ||
        typeof data === "boolean" ||
        typeof data === "bigint" ||
        typeof data === "symbol" ||
        typeof data === "function" ||
        Array.isArray(data)
    ) {
        return data.toString();
    }

    if(typeof data === "object" && data !== null) {
        return JSON.stringify(data);
    }

    return undefined;
}

console.log(toStringElement<string>('Hello'));
console.log(toStringElement<number>(10));
console.log(toStringElement<boolean>(true));
console.log(toStringElement<bigint>(BigInt(10)));
console.log(toStringElement<symbol>(Symbol('Hello')));
console.log(toStringElement<Function>(() => {}));
console.log(toStringElement<Array<number>>([1, 2, 3]));
console.log(toStringElement<object>({ name: 'John' }));