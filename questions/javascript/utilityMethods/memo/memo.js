function memo(func, resolver) {
    const cache = new Map();

    return function (...args) {
        const cacheKey = resolver ? resolver(...args) : args.join('_');
        if (cache.has(cacheKey)) {
            return cache.get(cacheKey);
        } else {
            const res = func (...args);
            cache.set(cacheKey, res);
            return res;
        }
    }
}


module.exports = memo;

