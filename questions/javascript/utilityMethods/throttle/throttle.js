/**
 * @param {(...args: any[]) => any} func
 * @param {number} wait
 * @param {boolean} option.leading
 * @param {boolean} option.trailing
 * @returns {(...args: any[]) => any}
 */
function throttle(func, wait, option = {leading: true, trailing: true}) {
    let timer = null;

    function throttled(...args){
        if (timer === null) {
            func.apply(this, args);
            timer = setTimeout(() => {
                timer = null;
            }, wait)
        }
    }
    return throttled;
}

module.exports = throttle;


