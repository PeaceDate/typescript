// Coposition vs Exteding.


// Exapmle 1

class SomeUser {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

// Bad practice

class Users extends Array<SomeUser> {
    serchByname(name: string) {
        return this.filter(user => user.name === name);
    }

    // Actually we don't need such a realization
    override toString(): string {
        return this.map(user => user.name).join(', ');
    }
}

const users = new Users();
users.push(new SomeUser('John'));
users.push(new SomeUser('Jane'));
console.log(users.toString());

// Good practice is to use composition instead of extending

class UserList {
    users: SomeUser[];

    constructor() {
        this.users = [];
    }

    push(user: SomeUser) {
        this.users.push(user);
    }
}

const userList = new UserList();
userList.push(new SomeUser('John'));
userList.push(new SomeUser('Jane'));
console.log(userList.users);


// Exapmle 2

class SomePayment {
    date: Date;
}

// Bad practice

class UserWithPayments extends Payment {
    name: string;
}

// Good practice is to use composition instead of extending

class UserWithPayments2 {
    user: SomeUser;
    payment: SomePayment;

    constructor(user: SomeUser, payment: SomePayment) {
        this.user = user;
        this.payment = payment;
    }
}