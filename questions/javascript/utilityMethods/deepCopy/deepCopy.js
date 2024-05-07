function deepCopy(original) {
    if (original === null) return null
    if (original === undefined) return undefined

    if (typeof original !== 'object') return original;

    if (Array.isArray(original)) {
        const copiedArray = [];
        for (const element of original) {
            const copiedElement = deepCopy(element)
            copiedArray.push(copiedElement);
        }
        return copiedArray;
    }

    if (typeof original === 'object') {
        const copied = {};
        const keys = Object.keys(original);
        for(const key of keys) {
            copied[key] = deepCopy(original[key]);
        }
        return copied;
    }

}
module.exports = deepCopy;

