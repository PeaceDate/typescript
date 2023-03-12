// typeof in TS

// Example 

let strOrNum: string | number;

if (Math.random() > 0.5) {
    strOrNum = 5
} else {
    strOrNum = 'str'
}

if (typeof strOrNum === 'string') {
    console.log(strOrNum)
} else {
    console.log(strOrNum)
}

let str2OrNum: typeof strOrNum;

const personUser = {
    name: 'Andrii',
    age: 30
}

type keyOfUSer = keyof typeof personUser


enum direction {
    UP,
    DOWN
}

type directionType = keyof typeof direction