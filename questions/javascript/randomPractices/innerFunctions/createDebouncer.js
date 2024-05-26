function createDebouncer(fn, delay) {
    let timeoutId;

    function debounced(...args) {
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            fn(args);
        }, delay)
    }

    return debounced;

}

const debouncedLogger = createDebouncer((message) => {
    console.log(message);
}, 1000);

debouncedLogger('Hello');
setTimeout(() => debouncedLogger('World'), 500);
setTimeout(() => debouncedLogger('Again'), 1000);
