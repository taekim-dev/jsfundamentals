export function customSplit(str, separator, limit) {
    const res = [];
    let splitCounter = 0;
    let currStr = '';

    for (let char of str) {
        if (char === separator) {
            res.push(currStr);
            currStr = '';
            splitCounter++;
            if (limit && res.length === limit) {
                return res;
            }
        } else {
            currStr += char;
        }
    }

    res.push(currStr);

    if (splitCounter === 0) {
        return [str];
    }

    return res;
    
}
