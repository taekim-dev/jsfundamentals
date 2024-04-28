function arrayMap(array, callback) {
    const res = [];
    array.forEach(element => {
        res.push(callback(element));
    })
    return res;
}

module.exports = arrayMap;


//It should properly pass the element, index, and original array to the callback function.