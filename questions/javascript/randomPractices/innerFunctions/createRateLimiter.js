function createRateLimiter(fn, limit) {
    let lastCall = 0;

    function rateLimitedFn(...args) {
        const now = Date.now();
        if (now - lastCall >= limit) {
            lastCall = now;
            return fn(...args);
        } else {
            return Promise.resolve('Rate limited');
        }
    }

    return rateLimitedFn;
}

const limitedLogger = createRateLimiter((message) => {
    console.log(message);
    return Promise.resolve();
}, 1000);

limitedLogger('Hello');
setTimeout(() => limitedLogger('World'), 500);
setTimeout(() => limitedLogger('Again'), 1000);
