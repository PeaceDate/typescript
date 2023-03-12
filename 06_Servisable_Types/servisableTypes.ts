// ! Partial, Required, Readonly

interface UserPersonalInfo {
    name: string;
    age?: number;
    email: string;
}

// Partial - make all properties optional
type partial = Partial<UserPersonalInfo>;
const p: partial = {}; // Valid because all properties are optional

// Required - make all properties required
type required = Required<UserPersonalInfo>;
const r: required = { name: 'John', age: 30, email: 'test@test.com' }; // Valid because all properties are required

// Readonly - make all properties readonly
type readonly = Readonly<UserPersonalInfo>;

// ! Omit, Pick, Exclude, Extract

// Omit - remove properties from interface

interface PaymenPers {
    id: number;
    sum: number;
    from: string;
    to: string;
}

type payment = Omit<PaymenPers, 'id'>;

// Pick - pick properties from interface
type paymentRequisite = Pick<PaymenPers, 'from' | 'to'>;

// Exclude - remove properties from interface
type extractExample = Extract<'from' | 'to' | payment, string>

// Exclude - remove properties from interface
type excludeExample = Exclude<'from' | 'to' | payment, string>

// ! ReturnType, Parameters, ConstructorParameters

class UserClass {
    constructor(public id: number, public name: string) {}
}

function getData(id: number): UserClass {
    return new UserClass(id, 'John');
}

// ReturnType - get return type of function
type returnType = ReturnType<typeof getData>;

// Parameters - get parameters of function
type parameters = Parameters<typeof getData>;

// ConstructorParameters - get parameters of constructor
type constructorParameters = ConstructorParameters<typeof UserClass>;

// ! Awaited


// Awaited - get type of promise
type awaited = Awaited<Promise<UserClass>>;

async function getPromise(): Promise<UserClass> {
    return new UserClass(1, 'John');
}

type returnTypeNonAwaited = ReturnType<typeof getPromise>; // Promise<UserClass>
type returnAwaited = Awaited<ReturnType<typeof getPromise>>; // UserClass

