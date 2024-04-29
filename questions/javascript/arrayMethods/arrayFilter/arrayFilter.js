
function arrayFilter(array, callback, thisArg) {



}

module.export = myFilter;

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.myFilter(item => item % 2 === 0);
console.log(evenNumbers);