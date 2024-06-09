/**
 * @param {string[][]} message
 * @return {string}
 */
function decode(message) {

}

const array1 = [
    ['I', 'B', 'C', 'A', 'L', 'K', 'A'],
    ['D', 'R', 'F', 'C', 'A', 'E', 'A'],
    ['G', 'H', 'O', 'E', 'L', 'A', 'D']
];

const res1 = decode(array1);
console.log(res1 === "IROCLED")

const array2 = [
    ['M', 'N', 'O', 'P'],
    ['T', 'U', 'V', 'W'],
    ['A', 'B', 'C', 'D']
];

const res2 = decode(array2);
console.log(res2 === "MUCW")

const array3 = [];

const res3 = decode(array3);
console.log(res3 === "")
