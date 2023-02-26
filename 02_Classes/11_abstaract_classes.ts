// Abstarct Classes

// Example 1

abstract class Controller {
    abstract handle(req: any): void;

    handleWithLog(req: any): void {
        console.log('Start');
        this.handle(req);
        console.log('End');
    }
}

// new Controller(); // Error: Cannot create an instance of an abstract class.

class UserController extends Controller {
    handle(req: any): void {
        console.log('UserController', req);
    }
}

const userController = new UserController();
userController.handleWithLog('Request');