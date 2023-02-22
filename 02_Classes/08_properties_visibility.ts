// Visibility of properties and methods in classes

// Example 1

class Vehicle {
    public type: string;
    private damages: string[] = [];
    private _model: string;
    protected run: number | null;

    constructor(run: number | null) {
        this.run = run;
    }

    set model(model: string) {
        this._model = model;
    }

    get model(): string {
        return this._model;
    }

    addDamage(damage: string): void {
        this.damages.push(damage);
    }
}

class EuroTrack extends Vehicle {

    constructor() {
        super(100000)
    }

    setRun(km: number) {
        this.run = km / 0.62
    }

    override addDamage(damage: string): void {
        super.addDamage(damage)
        // this.damage - error
    }
}

const vehicle = new Vehicle(300000);
vehicle.type = 'Sedan';
vehicle.addDamage('Broken window');
vehicle.model = 'BMW';

console.log(vehicle);

const truck = new EuroTrack();
console.log(truck)
truck.type = 'truck'
truck.model = 'Volvo'
truck.setRun(200000)
truck.addDamage('Rear window')
console.log(truck)