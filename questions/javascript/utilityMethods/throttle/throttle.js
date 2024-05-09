function throttle(Func, delay) {
    let timerFlag = null
    
    return function(...args) {
        if (timerFlag === null) {
            Func.apply(this, args);
            timerFlag = setTimeout(() => {
                timerFlag = null
            }, delay)
        }
    }
}

module.exports = throttle;

