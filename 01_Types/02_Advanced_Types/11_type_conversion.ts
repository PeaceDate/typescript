// Type conversion

// Example
let num: number = 5;
let str: string = a.toString();

let str2: string = '5';
let num2: number = +str2; // parseInt(str2)


// Constructor conversion

// Example
let num3 = new Number(5).valueOf(); // The same with new String('5').valueOf() and new Boolean(true).valueOf() and so on.

// Object conversion

// Example

interface SomeUser {
    name: string;
    email: string;
    login: string;
}

const someNewUser: SomeUser = {
    name: 'John',
    email: 'test@test.com',
    login: 'test'
}

// const someNewUser = {
//     name: 'John',
//     email: 'test@test.com',
//     login: 'test'
// } as SomeUser;

// const someNewUser = <SomeUser> {
//     name: 'John',
//     email: 'test@test.com',
//     login: 'test'
// }

interface adminUser {
    name: string;
    role: number;
}

// Bad practice
const adminUser: adminUser = {
    ...someNewUser,
    role: 1
}

// Good practice
function userToAdmin(user: SomeUser): adminUser {
    return {
        name: user.name,
        role: 1
    }
}