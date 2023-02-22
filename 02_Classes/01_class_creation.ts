// Class creation

class User {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

const classUser = new User('John');

console.log(classUser);

// Example

class Admin {
    role!: number // Get an error. To solve this error, we need to add the ! operator or switch to false srictPropertyInitialization in tsconfig.json
}

const userAdmin = new Admin();
userAdmin.role = 1;