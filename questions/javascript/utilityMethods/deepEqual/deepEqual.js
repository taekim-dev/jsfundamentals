function deepEqual(a, b) {
    if (typeof a !== typeof b){
        return false
    }

    if (a === null) {
        return b === null;
    }

    if (a === undefined) {
        return b === undefined
    }

    // First check primtive types
    if (typeof a === "number" || typeof a === "bigint" || typeof a === "string" || typeof a === "symbol" || typeof a === "boolean") {
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
        const keysA = Object.keys(a).sort();
        const keysB = Object.keys(b).sort();

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

