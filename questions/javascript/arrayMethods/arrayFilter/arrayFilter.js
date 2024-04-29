
function arrayFilter(array, callback, thisArg) {
    let res = [];
    array.forEach(element => {
        if(callback(element)){
            res.push(element);
        }
    })

    return res;
}

module.exports = arrayFilter;