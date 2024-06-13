/**
 * @param {Promise<any>} promise
 * @param {() => void} onFinally
 * @returns {Promise<any>}
 */
function myFinally(promise, onFinally) {
    
}

let promise = new Promise((resolve, reject) => {
    const success = true;

    if (success) {
        resolve('Success!');
    } else {
        reject('Error!');
    }
})

promise
    .then((value) => {
        console.log("Then:", value);
    })
    .catch((error) => {
        console.error("Catch:", error);
    })
    .finally(() => {
        console.log("Finally: this always runs")
    });