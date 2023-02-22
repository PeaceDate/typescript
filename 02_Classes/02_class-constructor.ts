// Constructor. A constructor is a special method that is called when an object is created. It is used to initialize the object.

// Example

class UserEntity  {
    name: string;
    age: number;

    constructor();
    constructor(name: string);
    constructor(age: number);
    constructor(name: string, age: number);
    constructor(ageOrName?: string | number, age?: number) {
        if (typeof ageOrName === 'string') {
            this.name = ageOrName;
        } else if (typeof ageOrName === 'number') {
            this.age = ageOrName;
        }

        if (typeof age === 'number') {
            this.age = age;
        }
    }
}

const usr = new UserEntity('John');
const usr2 = new UserEntity();
const usr3 = new UserEntity(33);
const usr4 = new UserEntity('John', 33); 
