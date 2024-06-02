/**
 * @param {(...args: any[]) => void} func
 * @returns {(...args: any[]) => Promise<any>}
 */
function promisify(func) {
    return function(...args) {
        return new Promise((resolve, reject) => {
            console.log('Args before callback:', args);
            func(...args, (error, data) => {
                console.log('Inside callback');
                if (error) {
                    reject(error);
                } else {
                    resolve(data);
                }
            });
        });
    };
}

// Original function
const func = (arg1, arg2, callback) => {
    setTimeout(() => {
        if (arg1 && arg2) {
            callback(null, `Success with ${arg1} and ${arg2}`);
        } else {
            callback(`Error: Missing arguments`);
        }
    }, 1000);
};

const promisedFunc = promisify(func);

promisedFunc('arg1', 'arg2')
    .then((data) => {
        console.log(data); // Output: Success with arg1 and arg2
    })
    .catch((error) => {
        console.error(error);
    });

promisedFunc('arg1')
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error(error); // Output: Error: Missing arguments
    });
