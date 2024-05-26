
/**
 * @param {() => Promise<any>} func
 * @param {number} max
 * @return {Promise}
 */
function throttlePromises(funcs, max){
    const taskQueue = new Array(max);
    const waitingQueue = funcs;
    const currentlyRunning = 0;

    function 

    

}

module.exports = throttlePromises;

throttleAsync(callApis, 5).then((data) => {
  // the data is the same as `Promise.all` 
}).catch((err) => {
  // any error occurs in the callApis would be relayed here
})