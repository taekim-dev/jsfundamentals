function arrayMap(array, callback) {
    const res = [];
    array.forEach((element, index, array) => {
        res.push(callback(element, index, array));
    })
    return res;
}

module.exports = arrayMap;


//It should properly pass the element, index, and original array to the callback function.