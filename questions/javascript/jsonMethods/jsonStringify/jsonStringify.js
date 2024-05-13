function stringify(input) {
    if (input === null) {
        return 'null';
    }

    if (typeof input === 'string') {
        return `"${input}"`;
    }

    if (typeof input === 'number' || typeof input === 'boolean') {
        return String(input);
    }

    if (Array.isArray(input)) {
        const outputs = input.map(element => stringify(element));
        return `[${outputs.join(',')}]`;
    }

    if (typeof input === 'object') {
        const keys = Object.keys(input);
        const keyValuePairs = keys.map(key => `"${key}":${stringify(input[key])}`);
        return `{${keyValuePairs.join(',')}}`;
    }
    
    return undefined;
}

module.exports = stringify;
