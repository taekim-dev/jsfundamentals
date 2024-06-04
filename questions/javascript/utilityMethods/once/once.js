/**
 * @param {Function} func
 * @return {Function}
 */
function once(func) {
    let called = false;
    let res = null;
    return function (...args) {
        if (!called) {
            res = func(...args);
            called = true;
            console.log(res);
        } else {
            console.log(res);
            return res;
        }
    }
}


function func(num) {
    return num
}

const onced = once(func)

onced(1) // 1, func called with 1
onced(2) // 1, even 2 is passed, previous result is returned 