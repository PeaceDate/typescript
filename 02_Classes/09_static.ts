// Static. Static members are accessed using the class name, rather than an instance of the class.

// Example 1

class UserService {
    static db: any;

    static getUserById(id: number): any {
        return this.db.find((user: any) => user.id === id);
    }

    static {
        UserService.db = 'db'
    }
}

UserService.db
UserService.getUserById(1);