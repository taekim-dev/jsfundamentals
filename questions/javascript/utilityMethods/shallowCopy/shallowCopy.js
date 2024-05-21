// Shallow copy only copies top-level values with 'primitive types'
// Otherwise the copied are shared with the original

function shallowCopy(original) {
    if (typeof original !== 'object' || original === null){
        return original;
    }

    const copied = Array.isArray(original) ? [] : {};

    for(let key in original) {
        if (original.hasOwnProperty(key)) {
            copied[key] = original[key];
        }
    }

    return copied;
}

let number = 2;
let copiedNumber = shallowCopy(2);
copiedNumber = 3;
console.log(number !== copiedNumber);

const original = { a : 1, b : { c : 2}, d: [3, 4]};
const copied = shallowCopy(original);

console.log(copied);
console.log(copied.b === original.b);
console.log(copied.d === original.d);

copied.a = 2;
console.log(original.a !== 2);

copied.b.c = 3;
console.log(original.b.c === 3);

copied.d.push(5);
console.log(original.d.length === 3);

