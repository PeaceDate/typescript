// Unknown Type.
    // The unknown type is the type-safe counterpart of any. We can assign any value to a variable of type unknown, but we can’t access any properties of a value of type unknown without first asserting that we know what the value’s type is. If we don’t, TypeScript will throw an error.


// Example

let userInput: unknown;

userInput = 'Hello World!';

let userName = userInput; // Can assign unknown only to unknown or any

function run(i: unknown) {
  if (typeof i === 'string') {
    console.log(i);
  } else {
    return i; // Parameter 'i' continue to be of type 'unknown'
  }
}

run(userInput);

// Real life example

async function getData() {
    try {
        await fetch('https://jsonplaceholder.typicode.com/todos/1')
    } catch(error) {
        // Works fine - we need to check error type before accessing its properties
        if (error instanceof Error) {
            console.log(error.message)
        }

        // console.log(error.message) - Doesn't work cause' error.message is of type unknown
    }
}

// OR

async function getDataForce() {
    try {
        await fetch('https://jsonplaceholder.typicode.com/todos/1')
    } catch(error) {
        const e = error as Error; // Now e is of type Error
        console.log(e.message)
    }
}

// Union Types with unknown

type unionType = string | number | boolean | unknown; // Always be unknown type

// Intersection Types with unknown

type intersectionType = unknown & number; // Will be number type. Intersection of unknnown and any other type will be that type