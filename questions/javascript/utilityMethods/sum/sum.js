function sum(arg) {
    const curr = arg;
    return function(newArg) {
        return curr + newArg;
    }
}

module.exports = sum;