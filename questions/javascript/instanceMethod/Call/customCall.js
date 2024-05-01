Function.prototype.customCall = function(thisArg, ...args) {
    return this.apply(thisArg, args);
}