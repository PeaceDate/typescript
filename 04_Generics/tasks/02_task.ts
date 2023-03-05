const data = [
    { id: 2, name: 'Петя' },
	{ id: 1, name: 'Вася' },
	{ id: 3, name: 'Надя' },
];

interface SortID {
    id: number;
}

function sortById <T extends SortID>(data: T[], sortType: "asc" | "desk" = "asc"): T[] {
    if (sortType === 'asc') {
        return data.sort((a, b) => a.id - b.id);
    }

    return data.sort((a, b) => b.id - a.id);
}

console.log(sortById(data));
console.log(sortById(data, 'desk'));
