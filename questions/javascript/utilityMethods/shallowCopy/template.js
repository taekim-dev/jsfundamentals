function shallowCopy() {


}


const original = { a : 1, b : { c : 2}, d: [3, 4]};
const copied = shallowCopy(original);

console.log(copied);
console.log(copied.b === original.b);
console.log(copied.d === original.d);

copied.a = 2;
console.log(original.a !== 2);

copied.b.c = 3;
console.log(original.b.c !== 3);

copied.d.concat([1, 2]);
console.log(original.d.length !== 4);

