// Mapped Types

// Example

type Modifier = 'read' | 'update' | 'creaete' | 'delete';

type UserRoles = {
    customers?: Modifier,
    projects?: Modifier
    adminPanel?: Modifier
}

type ModifierToAccess<Type> = {
    +readonly [Property in keyof Type]-?: boolean
}

type UserAccess2 = ModifierToAccess<UserRoles>;

type UserAccess1 = {
    customers?: boolean,
    projects?: boolean
    adminPanel?: boolean
}