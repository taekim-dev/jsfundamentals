function objectAssign(target, source) {
    // modify the original target, by adding source 
    // if duplicate key found, replace with the value of source

    const sourceKeys = Object.keys(source);
    sourceKeys.forEach(key => {
        if (key in target && typeof target[key] === 'object') {
            target[key] = objectAssign(target[key], source[key]);
        } else {
            target[key] = source[key];
        }
    })
    return target;
}

module.exports = objectAssign;

