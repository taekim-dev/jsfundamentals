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
            } else if (key === 'set') {

            } else if (key === 'merge') {
                
            }

            if(key === '$apply') {
                if (typeof command[key] !== 'function') {
                    throw new Error('$apply only applies to functions')
                } else {
                    result[key] = update(result[key], command[key]);
                }
            }
            //const newArr = update(arr, { 0: { $apply: (item) => item * 2 } });
        }
    }

    return result;
}


module.exports = update;

