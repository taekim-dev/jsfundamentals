function createThrottle(fn, delay) {
    let throttling = false;

    function throttled(...args) {
        if (!throttling) {
            fn(...args);
            throttling = true;
            setTimeout(() => {
                throttling = false;
            }, delay)
        }
    }

    return throttled;

}


const throttledLogger = createThrottle((message) => console.log(message), 1000);

throttledLogger("Hello");
setTimeout(() => throttledLogger('World'), 500);
setTimeout(() => throttledLogger('Again'), 1500);
