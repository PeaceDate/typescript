// Never Type. Never type is a type that never occurs. It is the return type of a function that never returns, and the type of a variable that is never assigned.

// Example

function generateError(message: string, code: number): never {
    throw new Error(`${message}. Code: ${code}`);
}

generateError('An error occurred!', 500);

function infiniteLoop(): never {
    while (true) {}
}

function neverReturns(): never {
    return generateError('An error occurred!', 500);
}

function recursiveFunction(): never {
    return recursiveFunction();
}


// const a: never = 1 // Error TS2322: Type '1' is not assignable to type 'never'.

// Real world example

type paymentAction  = 'pay' | 'refund' | 'cancel';

function processPayment(action: paymentAction) {
    switch (action) {
        case 'pay':
            //...
            break;
        case 'refund':
            //...
            break;
        case 'cancel':
            //...
            break;
        default:
            const _: never = action;
            throw new Error('Invalid action');
            break;
    }
}

function isString(value: string | number): boolean {
    if (typeof value === 'string') {
        return true;
    } else if (typeof value === 'number') {
        return false;
    }
    generateError('Invalid value', 500);
}
