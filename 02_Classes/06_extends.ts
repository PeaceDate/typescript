// Extends. Extends is used to inherit the properties and methods of a class to another class.

// Example 1

type PaymentStatus = 'New' | 'Paid';

class PaymentClass {
     id: number;
     status: PaymentStatus = 'New';

     constructor(id: number) {
         this.id = id;
     }

     pay(): void {
         this.status = 'Paid';
     }
}

class PersistentPayment extends PaymentClass {
    dataBaseId: number;
    paidAt: Date;

    constructor() {
        const id = Math.floor(Math.random() * 1000);
        super(id);
    }

    save(): void {
        this.dataBaseId = this.id;
    }

    override pay(date?: Date): void {
        super.pay()
        if (date) {
            this.paidAt = new Date()
        }
    }
}

const paymentEntity = new PersistentPayment();
console.log(paymentEntity);
paymentEntity.pay()
console.log(paymentEntity)
paymentEntity.save()
console.log(paymentEntity)