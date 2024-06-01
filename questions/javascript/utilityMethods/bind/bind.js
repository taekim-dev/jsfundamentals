function myBind(fn, context, ...boundArgs) {
    function bind(...args) {
        return fn.apply(context, [...boundArgs, ...args]);
    }
    return bind;
}

function greet(greeting, punctuation) {
    return `${greeting}, ${this.name}${punctuation}`;
}

const person = { name: 'Alice' };
const greetAlice = myBind(greet, person, 'Hello');

console.log(greetAlice('!')); // Expected output: "Hello, Alice!"

const add = function(a, b) {
    return a + b;
}

const addFive = myBind(add, null, 5);
console.log(addFive(3));

const multipy = function(a, b) {
    return a * b;
}

const multipyBuyTwo = myBind(multipy, null);
console.log(multipyBuyTwo(2, 3));