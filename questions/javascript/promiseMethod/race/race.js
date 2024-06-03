/**
 * @param {Array<Promise>} promises
 * @return {Promise}
 */
function race(promises) {
    if (promises.length === 0) {
        return Promise.resolve(null);
    }

    return new Promise((resolve, reject) => {
        promises.forEach(p => p.then(resolve, reject));
        // For each task, a promise is created and its asynchronous task (setTimeout) starts running.
    });
}

module.exports = race;

// const promise1 = new Promise((resolve) => {
//     setTimeout(() => resolve('first'), 1000);
// })


// const promise2 = new Promise((resolve) => {
//     setTimeout(() => resolve('first'), 500);
// })


// const promise3 = new Promise((resolve) => {
//     setTimeout(() => resolve('first'), 2000);
// })

// const promises = [promise1, promise2, promise3];

// race(promises)
//     .then(result => console.log(result)) // 'second'
//     .catch(error => console.log(error)); // 'second'

/**
 * 
 * Event Loop Visualization
Initial State:

Call Stack: []
Task Queue: []
Web APIs: [setTimeout for Task 1, Task 2, Task 3]
After 500ms:

Call Stack: []
Task Queue: [resolve('Task 2')]
Web APIs: [setTimeout for Task 1, Task 3]
After 1000ms:

Call Stack: []
Task Queue: [resolve('Task 1')]
Web APIs: [setTimeout for Task 3]
After 1500ms:

Call Stack: []
Task Queue: [resolve('Task 3')]
Web APIs: []
 */