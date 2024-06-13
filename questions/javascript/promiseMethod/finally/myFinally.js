/**
 * @param {Promise<any>} promise
 * @param {() => void} onFinally
 * @returns {Promise<any>}
 */
function myFinally(promise, onFinally) {
    return promise
        .then(
            (value) => {
                onFinally();
                return value;
            },
            (reason) => {
                onFinally();
                throw reason;
            }
        );
}

let promise = new Promise((resolve, reject) => {
    const success = false;

    if (success) {
        resolve('Success!');
    } else {
        reject('Error!');
    }
});

myFinally(promise, () => {
    console.log("Custom Finally: this always runs");
})
    .then((value) => {
        console.log("Then:", value);
    })
    .catch((error) => {
        console.error("Catch:", error);
    });