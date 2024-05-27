
/**
 * @param {() => Promise<any>} func
 * @param {number} max
 * @return {Promise}
 */
function throttlePromises(funcs, max){
  const res = new Array(funcs.length).fill(null);
  let activeCount = 0;
  let index = 0;

  return new Promise((resolve, reject) => {
    function runNext() {
      // all tasks completed
      if (index >= funcs.length && activeCount === 0) {
        resolve(res);
        return;
      }

      // start the task while the number of active tasks is less than max
      while (activeCount < max && index.funcs.length) {
        const currentIndex = index++;
        const promise = funcs[currentIndex]();

        activeCount++;
        promise.then(result => {
          res[currentIndex] = result;
          activeCount--;
          runNext();
        }).catch(error => {
          reject(error);
        });
      }
    }

    runNext();
  })

}

module.exports = throttlePromises;

throttleAsync(callApis, 5).then((data) => {
  // the data is the same as `Promise.all` 
}).catch((err) => {
  // any error occurs in the callApis would be relayed here
})