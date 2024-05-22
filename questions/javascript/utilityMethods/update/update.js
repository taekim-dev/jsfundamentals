function update(data, command) {
    if (typeof command !== 'object' || command === null) {
        throw new Error('command must be object')
    }

    const result = Array.isArray(data) ? [...data] : {...data};

    for (const key in command) {
        if (command.hasOwnProperty(key)) {
            if (key === '$push') {
                if (!Array.isArray(result)) {
                    throw new Error('$push only applies to arrays')
                } else {
                    result.push(...command[key]);
                }
            }
        }
    }

    return result;
}


module.exports = update;

