// This keyword.

// Example 1

class PaymentService {
    private date: Date = new Date();

    public getDate(this: PaymentService): Date {
        return this.date;
    }

    public getDateArrow = (): Date => this.date;
}

const paymentService = new PaymentService();

console.log(paymentService.getDate()); // 2020-07-01T13:00:00.000Z


const userEntity = {
    id: 1,
    paymentDate: paymentService.getDate,
    paymentDateArrow: paymentService.getDateArrow
}

console.log(userEntity.paymentDate()); // Error: Cannot read property 'date' of undefined
console.log(userEntity.paymentDateArrow()); // 2020-07-01T13:00:00.000Z

class PaymentPersisten extends PaymentService {
    save() {
        return super.getDate();
    }

    saveArrow = () => super.getDateArrow();
}

const paymentPersisten = new PaymentPersisten();
console.log(paymentPersisten.save()); // 2020-07-01T13:00:00.000Z
// console.log(paymentPersisten.saveArrow()); // Error

// This typisation

class UserBuilder {
    name: string;

    setname(name: string): this {
        this.name = name;
        return this;
    }

    isAdmin(): this is AdminBuilder {
        return this instanceof AdminBuilder;
    }
}

const userBuilder = new UserBuilder();
const userResult = userBuilder.setname('John');

class AdminBuilder extends UserBuilder {
    role: string; 
}

const adminBuilder = new AdminBuilder();
const adminResult = adminBuilder.setname('John');

let userBuild: UserBuilder | AdminBuilder = new UserBuilder();

if (userBuild.isAdmin()) {
    console.log(userBuild) // AdminBuilder
} else {
    console.log(userBuild) // UserBuilder
}
