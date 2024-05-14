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

    return innerSum
}

module.exports = sum;