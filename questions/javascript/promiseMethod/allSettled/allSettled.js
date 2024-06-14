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