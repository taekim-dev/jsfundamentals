class myPromise {
    constructor(executor) {
        this.state = 'pending';
        this.value = undefined;
        this.handlers = [];

        const resolve = (value) => {
            if (this.state === 'pending') {
                this.state = 'fulfilled';
                this.value = value;
                this.handlers.forEach(h => h.onFulfilled(value));
            }
        };

        const reject = (reason) => {
            if (this.state === 'pending') {
                this.state = 'rejected';
                this.value = reason;
                this.handlers.forEach(h => h.onRejected(reason));
            }
        };

        try {
            executor(resolve, reject);
        } catch (error) {
            reject(error);
        }
    }

    then(onFulfilled, onRejected) {
        return new myPromise((resolve, reject) => {
            this.handle({
                onFulfilled: (value) => {
                    try {
                        resolve(onFulfilled ? onFulfilled(value) : value);
                    } catch (error) {
                        reject(error);
                    }
                },
                onRejected: (reason) => {
                    try {
                        resolve(onRejected ? onRejected(reason) : reason);
                    } catch (error) {
                        reject(error);
                    }
                }
            })
        })
    }

    handle(handler) {
        if (this.state === 'fulfilled') {
            handler.onFulfilled(this.value);
        } else if (this.state === 'rejected') {
            handler.onRejected(this.value);
        } else {
            this.handlers.push(handler);
        }
    }
}

module.exports = myPromise;