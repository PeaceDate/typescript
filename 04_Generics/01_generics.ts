// Typescript Generics. Generics are a way to create reusable components.

// Built-in Generics

// Example 1: Array

const namesArray : Array<number> = [1, 2, 3]; // number[]

// Example 2: Promise

async function fetchAsync() {
    const promise = await new Promise<number>((resolve, reject) => {
        resolve(1)
    })
}

// Example 3: Record

const check: Record<string, boolean> = {
    drive: true,
    car: false,
}

// Custom Generics

// Example 1: Generic Function

function logMiddleWare<T>(data: T): T {
    console.log(data);
    return data;
}

const functionResult = logMiddleWare<number>(10);

// Example

function splitHalf<T>(data: Array<T>): Array<T> {
    const half = data.length / 2;
    return data.splice(0, half);
}

// Example 3: Generic in Types

const split: <T>(data: Array<T>) => Array<T> = splitHalf;

interface ILogLine<T> {
    timeStamp: Date;
    data: T
}

type logLineType<T> = {
    timeStamp: Date;
    data: T
}

const logLine: ILogLine<{ a: number }> = {
    timeStamp: new Date(),
    data: {
        a: 1
    }
}

// Generic Constraints

class Car {
    run: number
}

function kmToMiles<T extends Car>(vehicle: T): T {
    vehicle.run = vehicle.run / 0.62;
    return vehicle;
}

class LCV extends Car {
    capacity: number
}

const vehicleCar = kmToMiles(new Car());
const vehicleLCV = kmToMiles(new LCV());

function logId<T extends string | number>(id: T): T {
    console.log(id);
    return id;
}

// Generic in Classes

class Resp<D, E> {
    data?: D;
    error?: E;

    constructor(data?: D, error?: E) {
        if (data) {
            this.data = data;
        }
        if (error) {
            this.error = error;
        }
    }
}

const resp = new Resp<string, number>('data', 0);

console.log(resp.error);

class HTTPResp<F> extends Resp<string, number> {
    code: F;

    constructor(code: F, data?: string, error?: number) {
        super(data, error);
        this.code = code;
    }

    setCode(code: F) {
        this.code = code;
    }
}

const httpResp = new HTTPResp(200, 'data', 0);

console.log(httpResp);

// Mixins

type Constructor = new (...args: any[]) => {};
type GConstructor<T = {}> = new (...args: any[]) => T;

class List{
    constructor(public items: string[]) {}
    test() {
        return this.items;
    }
}

class Accordion{
    public isOpened: boolean;
}

class Popup{
    public type: string;
}

type ListType = GConstructor<List>;
type AccordionType = GConstructor<Accordion>;
type PopupType = GConstructor<Popup>;

class ExtendedListClass extends List {
    first() {
        return this.items[0];
    }
}

function ExtendedList<TBase extends ListType & AccordionType & PopupType>(Base: TBase) {
    return class extends Base {
        first() {
            return this.items[0];
            // return this.isOpened;
            // return this.type;
        }
    }
}

class Component {
    isOpened: boolean;
    type: string;
    constructor(public items: string[]) {
        this.isOpened = true;
        this.type = 'info';
    }
}

const ExtendedComponent = ExtendedList(Component);
const resultMixin = new ExtendedComponent(['a', 'b', 'c']);
resultMixin.first();
resultMixin.isOpened;
resultMixin.type;
