function memo(func, resolver) {
  
    const store = {};
    return function(...args){
        const cacheKey = args.join('_');
        if (cacheKey in store) {
            return store[cacheKey];
        } else {
            const res = func(...args);
            store[cacheKey] = res
            return res;
        }
    }

}


module.exports = memo;

