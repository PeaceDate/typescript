// Type Guard. Type guard is a way to tell the compiler that the type of a variable is more specific than the type that the compiler thinks it is.

// Example

function logId(id: string | number) {
    if (isString(id)) {
        console.log(id.toUpperCase());
    } else {
        console.log(id);
    }
}

function isString(x: string | number): x is string {
    return typeof x === 'string';
}

// Exapmle 2

interface IUser {
    name: string;
    email: string;
    login: string;
}

interface IAdmin {
    name: string;
    role: number;
}

function isAdmin(user: IUser | IAdmin): user is IAdmin {
    return 'role' in user;
}

function isAdminAlternative(user: IUser | IAdmin): user is IAdmin {
    return (user as IAdmin).role !== undefined;
}

function isAdminAlternative2(user: IUser | IAdmin): user is IAdmin {
    return (<IAdmin>user).role !== undefined;
}

function setRole(user: IUser | IAdmin) {
    if (isAdmin(user)) {
        user.role = 1;
    } else {
        throw new Error('User is not an admin');
    }
}