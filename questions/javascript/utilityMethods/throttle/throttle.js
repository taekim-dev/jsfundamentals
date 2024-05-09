function throttle(Func, delay) {
    let timerId = null;

    return function(...args) {
        if(timerId === null) {
            Func.apply(this, args);
            timerId = setTimeout(() => {
                timerId = null;
            }, delay)
        }
    }
}

module.exports = throttle;

