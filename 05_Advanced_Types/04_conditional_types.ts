// Conditional Types

// Example

const a1: number = Math.random() > 0.5 ? 1 : 0;

interface httpResponce<T extends 'succsess' | 'failed'> {
    code: number;
    data: T extends 'succsess' ? string : Error;
    additionalData: T extends 'succsess' ? string : number;
}

const suc: httpResponce<'succsess'> = {
    code: 200,
    data: 'some data',
    additionalData: 'some additional data'
}

const err: httpResponce<'failed'> = {
    code: 500,
    data: new Error('some error'),
    additionalData: 500
}

class Usr {
    id: number;
    name: string;
}

class UsrPers extends Usr{
    dbId: string;
}

function getUserFunc(Id: number): Usr;
function getUserFunc(dbId: string): UsrPers;
function getUserFunc(dbIdOrId: number | string): Usr | UsrPers {
    if (typeof dbIdOrId === 'number') {
        return new Usr();
    } else {
        return new UsrPers();
    }
}

type UsrOrUsrPers<T extends string | number> = T extends number ? Usr : UsrPers;

function getUserFunc2<T extends string | number>(id: T): UsrOrUsrPers<T> {
    if (typeof id === 'number') {
        return new Usr() as UsrOrUsrPers<T>;
    } else {
        return new UsrPers() as UsrOrUsrPers<T>;
    }
}
