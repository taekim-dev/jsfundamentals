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


let promise1 = Promise.resolve('Fulfilled');
myFinally(promise1, () => console.log('Custom Finally 1')).then(console.log).catch(console.error);
    
let promise2 = Promise.reject('Rejected');
myFinally(promise2, () => console.log('Custom Finally 2')).then(console.log).catch(console.error);

let promise3 = new Promise((resolve) => setTimeout(() => resolve('Delayed Fulfillment'), 1000));
myFinally(promise3, () => console.log('Custom Finally 3')).then(console.log).catch(console.error);