// Types VS Interfaces

// Example 1 - Interfaces

interface User2 {
    name: string;
}

interface User2 {
    age: number;
}

const user2: User2 = {
    name: 'John',
    age: 30
}

// Example 2 - Type aliases

type ID = number | string;

interface ID2 {
    id: number | string;
}
