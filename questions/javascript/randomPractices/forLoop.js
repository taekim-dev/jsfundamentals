// comparing forEach vs for...of
const array = new Array(10000).fill(Math.random());

console.time('forEach');
const res1 = [];
array.forEach(element => {
    if (element) {
        res1.push(element);
    }
})
console.timeEnd('forEach');

console.time('for...of');
const res2 = [];
for (const element of array) {
    if (element) {
        res2.push(element);
    }
}
console.timeEnd('for...of')