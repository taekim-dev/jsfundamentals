

/**
 * @param {(...args) => void} func
 * @returns {(...args) => Promise<any}
 */
function promisify(func) {
}
  
// Orinal function
const func = (arg1, arg2, callback) => {
    setTimeout(() => {
        if (arg1 && arg2) {
            callback(null, `Success with ${arg1} and ${arg2}`);
        } else {
            callback(`Error: Missing arguments`);
        }
    }, 1000)
}

const promisedFuc = promisify(func);

promisedFuc('arg1', 'arg2')
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error(error);
    });

promisedFunc('arg1')
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error(error); // Mising arguments
    })