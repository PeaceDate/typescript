// keyof

// Example

interface IUserInterface {
    name: string,
    age: number
}

type keysOfUser = keyof IUserInterface

const key: keysOfUser = 'age'

function getValue<T, K extends keyof T >(obj: T, key: K) {
    return obj[key];
}

const personEntity: IUserInterface = {
    name: 'Andrii',
    age: 30
}

const userNameObj = getValue(personEntity, 'name')