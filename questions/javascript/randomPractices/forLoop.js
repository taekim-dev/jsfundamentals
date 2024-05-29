// comparing forEach vs for...of
// const array = new Array(10000).fill(Math.random());
const array = Array.from({ length: 10000 }, () => Math.random());

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

// This time for...of is faster to handle complex object
const array2 = Array.from({ length: 10000 }, (_, i) => ({ id: i, value: Math.random() }));

console.time('forEach');
let sum1 = 0;
array2.forEach(element => {
    sum1 += element.value;
});
console.timeEnd('forEach');

console.time('for...of');
let sum2 = 0;
for (const element of array2) {
    sum2 += element.value;
}
console.timeEnd('for...of');

console.log('Sum using forEach:', sum1);
console.log('Sum using for...of:', sum2);
