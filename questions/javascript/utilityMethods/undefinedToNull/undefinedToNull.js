function undefinedToNull(input) {
    if (input === undefined) {
        return null;
    }
    
    if (Array.isArray(input)) {
        return input.map(element => undefinedToNull(element));
    }

    if (input !== null && typeof input === 'object') {
        Object.keys(input).forEach(key => {
            input[key] = undefinedToNull(input[key]);
        });
    }

    return input;
}


module.exports = undefinedToNull;

