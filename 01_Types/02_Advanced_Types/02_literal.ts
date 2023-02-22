// Literal types. Literal types allow you to specify the exact value a variable must have. Literal types are a subtype of the primitive types they are built from, so you can use them in the same places as the primitive types.

// Example 1

function fetchWithAuth(url: string, metod: 'POST' | 'GET' | 'PUT' | 'DELETE') {
    return fetch(url, {
        method: metod,
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    });
}

fetchWithAuth('/api/users', 'POST');

// Example 2

let a: 'test' =  'test';
// a = 1; // Error