function pipe(funcs) {
    return function(arg) {
        return funcs.reduce((acc, currFunc) => currFunc(acc), arg)
    }
}

module.exports = pipe;

