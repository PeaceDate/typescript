// Null Type

// Example 

const n: null = null;
const n1: any = null;

// This could be shut down by setting the strictNullChecks flag to true in tsconfig.json

// const n2: number = null; // Error TS2322: Type 'null' is not assignable to type 'number'.
// const n3: string = null; // Error TS2322: Type 'null' is not assignable to type 'string'.
// const n4: boolean = null; // Error TS2322: Type 'null' is not assignable to type 'boolean'.
// const n5: undefined = null; // Error TS2322: Type 'null' is not assignable to type 'undefined'.

interface UserForFunction {
    name: string;
}

function getUserFromBD() {
    if (Math.random() > 0.5) {
        return null;
    } else {
        return {
            name: 'John'
        } as UserForFunction;
    }
}
 
const newUser = getUserFromBD();
if (newUser) {
    const userNameFromDB = newUser.name;
}
