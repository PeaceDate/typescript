interface Data {
    group: number,
    name: string
}

interface IGroup<T> {
    [key: string]: T[]
}

const dataGroup: Data[] = [
	{ group: 1, name: 'a' },
	{ group: 1, name: 'b' },
	{ group: 2, name: 'c' },
];

type key = string | number | symbol

function grouping<T extends Record<key, any>>(arr: T[], key: keyof T): IGroup<T> {
    console.log(arr)
    console.log(key)
    return arr.reduce<IGroup<T>>((map: IGroup<T>, item) => {
        const itemKey = item[key]
        let currentElem = map[itemKey]
        if(Array.isArray(currentElem)) {
            currentElem.push(item)
        } else {
            currentElem = [item]
        }
        map[itemKey] = currentElem
        return map
    }, {})
}

console.log(grouping<Data>(dataGroup, 'group'))