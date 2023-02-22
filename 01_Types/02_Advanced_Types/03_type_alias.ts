// Type Aliases. Type aliases create a new name for a type. Type aliases are sometimes similar to interfaces, but can name primitives, unions, tuples, and any other types that you’d otherwise have to write by hand.

// Example 1

type httpMethod = 'POST' | 'GET' | 'PUT' | 'DELETE';

function fetchWithAuth(url: string, metod: httpMethod) {
    return fetch(url, {
        method: metod,
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    });
}

fetchWithAuth('/api/users', 'POST');

// Example 2

type UserData = {
    name: string;
    age: number;
    skills: string[];
};

const userData: UserData = {
    name: 'John',
    age: 30,
    skills: ['html', 'css', 'js']
};

// Example 3 Type Intersections

type Role = {
    role: string;
    id: number;
}

type UserWithRole = UserData & Role;


const userWithRole: UserWithRole = {
    name: 'John',
    age: 30,
    skills: ['html', 'css', 'js'],
    role: 'admin',
    id: 1
};
