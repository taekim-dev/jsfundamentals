function arrayMap(array, callback) {
    const res = [];
    array.forEach((element, index) => {
        res.push(callback(element, index));
    })
    return res;
}

module.exports = arrayMap;


//It should properly pass the element, index, and original array to the callback function.