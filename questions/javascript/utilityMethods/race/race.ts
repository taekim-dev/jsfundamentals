type Callback = (error: Error | undefined, data: any) => void;

type AsyncFunc = (callback: Callback, data?: any) => void;

/**
 * @param {AsyncFunc[]} funcs
 * @return {(callback: Callback) => void}
 */
function race(funcs: AsyncFunc[]) {
    return (callback: Callback, data?: any) => {
        let finished = false;

        funcs.forEach((func) => {
            func((error, result) => {
                if (!finished) {
                    finished = true;
                    callback(error, result);
                }
            }, data);
        });
    };
}

const async1: AsyncFunc = (callback) => {
    setTimeout(() => callback(undefined, 1), 300);
};

const async2: AsyncFunc = (callback) => {
    setTimeout(() => callback(undefined, 2), 100);
};

const async3: AsyncFunc = (callback) => {
    setTimeout(() => callback(undefined, 3), 200);
};

const first = race([async1, async2, async3]);

first((error, data) => {
    if (error) {
        console.error(error);
    } else {
        console.log(data); // 2
    }
});
