// Optinal Types

interface User3 {
    login: string;
    password?: string;
}

const user3: User3 = {
    login: 'john'
    // password: '123' - optional
}

type User4 = {
    login: string;
    password?: string;
}

const user4: User4 = {
    login: 'john'
    // password: '123' - optional
}

// Partial - make all properties optional

interface User5 {
    login: string;
    password: string;
}

const user5: Partial<User5> = {
    login: 'john',
}

// Optional in function

function multiply(first: number, second?: number): number {
    if (!second) {
        return first * first;
    }
    return first * second;
}

multiply(2); // 4
multiply(2, 3); // 6

// Default value

function multiply2(first: number, second: number = 2): number {
    return first * second;
}

multiply2(2); // 4
multiply2(2, 3); // 6

// Optional in object

interface User6 {
    login: string;
    password?: {
        type: 'primary' | 'secondary';
    }
}

function testPassword(user: User6) {
    const userType = user.password?.type;
}

// Nullish Coalescing

function multiply3(first: number, second?: number): number {
    return first * (second ?? 2);
}