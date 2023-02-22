// Methods. Methods are functions that are defined inside a class.

// Example 1

enum Status {
    Holded,
    Prosseced,
    Reverced
}

class Payment {
    id: number;
    status: Status = Status.Holded;
    createdAt: Date = new Date();
    updatedAt: Date;

    constructor(id: number) {
        this.id = id;
    }

    getPaymentLiveTime(): number {
        return new Date().getTime() - this.createdAt.getTime();
    }

    unholdPayment(): void {
        if (this.status == Status.Prosseced) {
            throw new Error('Payment is already prosseced');
        }
        this.status = Status.Reverced;
        this.updatedAt = new Date();
    }
}

const payment = new Payment(1);
payment.unholdPayment();
const time = payment.getPaymentLiveTime();

// Methods Overloading. Methods can be overloaded. This means that a method can have multiple signatures.

// Example 2

class SomeNewUser {
    skills: string[] = [];

    addSkill(skill: string): void;
    addSkill(skills: string[]): void;
    addSkill(skillOrSkills: string | string[]): void {
        if (typeof skillOrSkills === 'string') {
            this.skills.push(skillOrSkills);
        } else {
            this.skills.push(...skillOrSkills);
        }
    }
}

const someUsr = new SomeNewUser();