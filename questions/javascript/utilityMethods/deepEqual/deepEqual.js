function deepEqual(a, b) {
    if (typeof a !== typeof b){
        return false
    }

    // First check primtive types
    if (typeof a === "number" || typeof a === "bigint" || typeof a === "string") {
        return a === b
    }

    if (Array.isArray(a)) {
        if (!Array.isArray(b)) {
            return false;
        }
        
        if (a.length !== b.length) {
            return false;
        }

        for (let i = 0; i < a.length; i++) {
            if (!deepEqual(a[i], b[i])) {
                return false;
            }
        }
        return true;
    }
    
    if (typeof a === 'object' && typeof b === 'object') {
        const keysA = Object.keys(a);
        const keysB = Object.keys(b);

        if (keysA.length !== keysB.length) {
            return false;
        }

        for (let i = 0; i < keysA.length; i++) {
            if (!deepEqual(a[keysA[i]], b[keysB[i]])){
                return false;
            }
        }

        return true;
    }

}

module.exports = deepEqual;

