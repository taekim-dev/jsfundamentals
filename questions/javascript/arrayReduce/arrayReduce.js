function arrayReduce(array, callbackfn, initialValue) {
    let accumulator = initialValue ? initialValue : array[0];
    let startIndex = initialValue ? 0 : 1;
    const res = startIndex === 1 ? [accumulator] : [];

    for(let i = startIndex; i < array.length; i++){
        accumulator = callbackfn(accumulator, array[i]);
        res.push(accumulator);
    }
    return res;
}

module.exports = arrayReduce;