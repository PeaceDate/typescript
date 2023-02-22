// Gettesrs and Setters. Getters and setters are used to access private properties of a class.

// Example 1

class AnotherUser {
    _login: string; // need to be private
    password: string;
    createdAt: Date

    set login(loginPrefix: string | number) {
        this._login = `user-${loginPrefix}`;
        this.createdAt = new Date();

    }

    get login(): string | number {
        return this._login;
    }
}

const anotherUser = new AnotherUser();
anotherUser.login = 'test';
console.log(anotherUser);
console.log(anotherUser.login);