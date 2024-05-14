function sum(arg) {
    const curr = arg;
    
    function innerSum(newArg) {
        if (newArg === undefined) {
            return curr;
        }
        return sum(curr + newArg)
    }

    innerSum.valueOf = function () {
        return curr;
    };

    innerSum.toString = function () {
        return String(curr);
    };

    return innerSum
}

module.exports = sum;