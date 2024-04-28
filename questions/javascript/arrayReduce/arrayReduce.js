function arrayReduce(array, callbackfn) {
    let accumulator = array[0];
    let startIndex = 1;
    const res = [accumulator];
    for(let i = startIndex; i < array.length; i++){
        accumulator = callbackfn(accumulator, array[i]);
        res.push(accumulator);
    }
    return res;
}

module.exports = arrayReduce;