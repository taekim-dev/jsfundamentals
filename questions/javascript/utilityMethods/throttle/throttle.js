/**
 * @param {(...args: any[]) => any} func
 * @param {number} wait
 * @param {boolean} option.leading
 * @param {boolean} option.trailing
 * @returns {(...args: any[]) => any}
 */
function throttle(func, wait, option = {leading: true, trailing: true}) {
    let timer = null;
    const {leading, trailing} = option;
    let firstCalled = false;
    let lastCalled = false;

    function throttled(...args){
        if (timer === null) {
            if (!firstCalled && leading) {
                func.apply(this, args);
                firstCalled = false;
            }
            timer = setTimeout(() => {
                timer = null;
            }, wait)
        }
    }
    return throttled;
}

module.exports = throttle;

// class Throttle {
//     constructor(func, wait) {
//         this.func = func;
//         this.wait = wait;
//         this.lastTime = 0;
//     }

//     throttledFunction(...args) {
//         const now = Date.now();
//         if (now - this.lastTime >= this.wait) {
//             this.lastTime = now;
//             this.func.apply(this, args);
//         }
//     }
// }

// const throttleInstance = new throttle(() => console.log('Called'), 1000);
// const throttled = throttleInstance.throttledFunction.bind(throttleInstance);
// throttled();


