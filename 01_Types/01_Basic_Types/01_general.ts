// Types (TypeScript)

// 1. String. Contains a sequence of characters. Can be enclosed in single or double quotes or backticks.

let fistName: string = "John"; 
let message: string = `Hello, ${name}`;

// 2. Number. Contains a numeric value. Can be an integer or a floating point number.

let age: number = 25;
let score: number = 45.60;

// 3. Boolean. Contains a logical value. Can be true or false.

let isMarried: boolean = false;

// 4. Array. Contains a list of items. Can be of any type.

let names: string[] = ["John", "Jane", "Bob"];

// 5. Tuple. A fixed-length array of values of different types. The order of the types is fixed and the number of elements is fixed.

let person: [string, number, boolean] = ["John", 25, false];


// 6. Object. A type that represents the non-primitive type

declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK

// 8. Any. A type that can be anything. It is not recommended to use this type.

let randomValue: any = 10;
randomValue = true;
randomValue = "John";

// Example
let revenue: number = 1000;
let bonus: number  = 500;

let total: number = revenue + bonus;

console.log(total);

// Types in Functions

// Example

function getFullName(firstName: string, surName: string): string {
    return `${firstName} ${surName}`
}

const getFullNameArrow = (firstName: string, surName: string): string => {
    return `${firstName} ${surName}`
}

// Types in Objects

// Example

const user = {
    firstName: "John",
    surName: "Doe",
    city: "New York",
    age: 25
}

function getUser(userEntity: { firstName: string, surName: string }): string {
    return `${userEntity.firstName} ${userEntity.surName}`
}

getUser(user)

// Array Types

// Example

const skills: string[] = ['dev', 'devOps', 'QA', 'BA']

for(const skill of skills) {
    console.log(skill)
}

skills.filter((skill: string) => skill !== 'decOps')
    .map((skill: string) => skill.toUpperCase())
    .reduce((acc: string, skill: string) => acc + skill, '')

// Tuple Types

// Example

const skill: [string, number] = ['dev', 1]

const [skillName, id] = skill;

const arr: [number, string, ...boolean[]] = [1, '2', true, false, true] 
