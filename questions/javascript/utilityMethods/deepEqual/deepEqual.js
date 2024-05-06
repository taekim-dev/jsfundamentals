function deepEqual(a, b) {
    if (typeof a !== typeof b){
        return false
    }

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
    // First check primtive types


}

module.exports = deepEqual;

