/**
 * @param {Array<any>} promises - notice that input might contains non-promises
 * @return {Promise<Array<{status: 'fulfilled', value: any} | {status: 'rejected', reason: any}>>}
 */
function allSettled(promises) {
    
    const wrappedPromises = promises.map(p => Promise.resolve(p).then(
        value => ({ status: 'fulfilled', value }),
        reason => ({ status: 'rejected', reason })
    ));

    return Promise.all(wrappedPromises);
}
  
  

let promise1 = Promise.resolve('Fulfilled');    
let promise2 = Promise.reject('Rejected');
let promise3 = new Promise((resolve) => setTimeout(() => resolve('Delayed Fulfillment'), 1000));

allSettled([promise1, promise2, promise3, 'done']).then(results => {
    console.log(results);
})

allSettled([]).then((results) => {
    console.log(results); // []
})

let singleResolved = Promise.resolve('Single fulfilled');
allSettled([singleResolved]).then((result) => {
    console.log(result);
})

let singleRejected = Promise.resolve('Single rejected');
allSettled([singleRejected]).then((result) => {
    console.log(result);
})

let mixedPromise1 = Promise.resolve('Mixed Fulfilled');
let mixedPromise2 = Promise.reject('Mixed Rejected');
allSettled([mixedPromise1, mixedPromise2, 100, 'test']).then((results) => {
    console.log(results);
});