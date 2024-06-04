/**
 * @param {Function} func
 * @return {Function}
 */
function once(func) {
    let called = false;
    let res = null;
    return function (...args) {
        if (!called) {
            res = func(...args);
            called = true;
            console.log(res);
        } else {
            console.log(res);
        }
        return res;
    }
}


function func(num) {
    return num
}

const onced = once(func)

onced(1) // 1, func called with 1
onced(2) // 1, even 2 is passed, previous result is returned 

function sum(a, b) {
    return a + b;
}

const onceSum = once(sum);

console.log(onceSum(1, 2)); // Logs: 3, returns: 3
console.log(onceSum(3, 4)); // Logs: 3, returns: 3

function greet() {
    return "Hello!";
}

const onceGreet = once(greet);

console.log(onceGreet()); // Logs: "Hello!", returns: "Hello!"
console.log(onceGreet()); // Logs: "Hello!", returns: "Hello!"
