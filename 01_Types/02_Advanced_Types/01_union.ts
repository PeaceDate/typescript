// Union type. A union type is a type formed from two or more other types, representing values that may be any one of those types. Union types are typically used for values that may be one of a number of different types.

// Example 1
function logId(id: number | string | boolean) {
    console.log(`Your ID is: ${id}`);
}

logId(1);
logId('1');

// Example 2 - Using specific type methods (Narrowing - Сужжение типов) 

function logId2(id: number | string | boolean) {
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    } else {
        console.log(id);
    }
}

logId2(1);
logId2('1');


// Example 3

function logId3(id: string | string[]) {
    if (Array.isArray(id)) {
        console.log(id.join(' '));
    } else {
        console.log(id);
    }
}

logId3('1');
logId3(['1', '2', '3']);

// Example 4

function logId4(id: { a: number} | { b: number }) {
    if ('a' in id) {
        console.log(id.a);
    } else {
        console.log(id.b);
    }
}

logId4({ a: 1 });
logId4({ b: 2 });

// Example 5

function logId5(a: string | number, b: string | boolean) {
    if (a === b) {
        console.log(a.toUpperCase());
    } else {
        console.log(a);
    }
}
