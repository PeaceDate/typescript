// Infer

// Example

function runTransaction(transaction: {
    fromTo: [string, string]
}) {
    console.log(transaction);
}

const transaction: GetFirstArg<typeof runTransaction> = {
    fromTo: ['USD', 'RUB'],
}

runTransaction(transaction);

type GetFirstArg<T> = T extends (first: infer First, ...rest: any[]) => any ? First : never;