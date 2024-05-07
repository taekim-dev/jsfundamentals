function deepCopy(original) {
    if (typeof original !== 'object' || original === null) return original;

    if (Array.isArray(original)) {
        return original.map(item => deepCopy(item));
    }

    if (typeof original === 'object') {
        const copied = {};
        for (const key in original) {
            if (original.hasOwnProperty(key)) {
                copied[key] = deepCopy(original[key]);
            }
        }
        return copied;
    }

}
module.exports = deepCopy;

