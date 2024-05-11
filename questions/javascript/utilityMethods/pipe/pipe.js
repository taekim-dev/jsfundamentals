function pipe(funcs) {
    return function(arg) {
        let res = arg;
        while(funcs.length !== 0) {
            currFunc = funcs.shift();
            res = currFunc(res, arg)
        }
        return res;
    }
}

module.exports = pipe;

