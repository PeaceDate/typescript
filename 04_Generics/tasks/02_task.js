var data = [
    { id: 2, name: 'Петя' },
    { id: 1, name: 'Вася' },
    { id: 3, name: 'Надя' },
];
function sortById(data, sortType) {
    if (sortType === void 0) { sortType = "asc"; }
    if (sortType === 'asc') {
        return data.sort(function (a, b) { return a.id - b.id; });
    }
    return data.sort(function (a, b) { return b.id - a.id; });
}
console.log(sortById(data));
console.log(sortById(data, 'desk'));
