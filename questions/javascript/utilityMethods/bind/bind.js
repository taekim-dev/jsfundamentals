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
