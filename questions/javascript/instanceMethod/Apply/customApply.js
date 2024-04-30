Function.prototype.customApply = function(thisArg, argsArray) {
    argsArray = argsArray ? argsArray : [];
    return this.call(thisArg, ...argsArray);
}