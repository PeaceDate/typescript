// Form validation

interface IForm {
    name: string;
    password: string;
}

const form: IForm = {
    name: 'John',
    password: '123456',
}

const formValidation: FormValidation<IForm> = {
    name: {isValid: true},
    password: {isValid: false, erroMassage: 'Password is too short'},
}

type FormValidation<T> = {
    [Property in keyof T]: {
        isValid: true
    } | {
        isValid: false,
        erroMassage?: string
    }
}