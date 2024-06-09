/**
 * @param {string[][]} message
 * @return {string}
 */
function decode(message) {
    if (message.length === 0 || message[0]?.length === 0) return "";

    let row = 0;
    let col = 0;
    let decoded = "";
    let down = true;

    while (col < message[0].length) {
        decoded += message[row][col];

        if (down) {
            row += 1;
            if (row === message.length - 1){
                down = false;
            }

        } else {
            row -= 1;
            if (row === 0){
                down = true;
            }
        }
        col += 1;

    }

    return decoded;
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

const array3 = [[]];

const res3 = decode(array3);
console.log(res3 === "")
