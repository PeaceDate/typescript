// Indexed Access Types

// Example JS

interface NewRole {
    name: string;
}

interface Permission {
    endDate: Date;
}

interface IUserInterfaceNew {
    name: string;
    roles: NewRole[];
    permissions: Permission;
}

const newUserPerson: IUserInterfaceNew = {
    name: 'Andrii',
    roles: [],
    permissions: {
        endDate: new Date()
    }
}

const someUserName = newUserPerson['name'];

// Example TS

type rolesTypes = IUserInterfaceNew['roles'];
type roleType = IUserInterfaceNew['roles'][number];
type date = IUserInterfaceNew['permissions']['endDate']; 

const roles = ["admin", "user", "guest"] as const;
type roleTypes = typeof roles[number];
