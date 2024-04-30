Function.prototype.customApply = function(thisArg, argsArray) {
    return this.call(thisArg, ...argsArray);
}