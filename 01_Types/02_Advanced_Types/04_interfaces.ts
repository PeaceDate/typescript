// Interfaces. Interfaces are a powerful way of describing an object's shape.

// Example 1: Simple interface

interface User {
    name: string;
    age: number;
    skills: string[];
    log: (id: number) => string;
}

interface Role2 {
    role: string;
    id: number;
}

interface UserWithRoleInterface extends User, Role2 {
    created: Date;
}

const userInterfaceData: UserWithRoleInterface = {
    name: 'John',
    age: 30,
    skills: ['html', 'css', 'js'],
    role: 'admin',
    id: 1,
    created: new Date(),
    log: (id: number) => {
        return `User ${id} logged in`;
    }
}

// Example 2

interface UserDictionary {
    [index: number]: User;
};

const userDictionary: UserDictionary = {
    1: {
        name: 'John',
        age: 30,
        skills: ['html', 'css', 'js'],
        log: (id: number) => {
            return `User ${id} logged in`;
        }
    },
    2: {
        name: 'John',
        age: 30,
        skills: ['html', 'css', 'js'],
        log: (id: number) => {
            return `User ${id} logged in`;
        }
    }
};
