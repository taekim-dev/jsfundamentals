/*
type Callback = (error: Error, data: any) => void

type AsyncFunc = (
   callback: Callback,
   data: any
) => void

*/

/**
 * @param {AsyncFunc[]} funcs
 * @return {(callback: Callback) => void}
 */
function sequence(funcs){
  return function (callback, initialValue) {
    let index = 0;

    function next(error, data) {
      if (error || index === funcs.length) {
        callback(error, data);
      } else {
        const func = funcs[index++];
        func(next, data);
      }
    }
    next (null, initialValue)
  }  
}

module.exports = sequence;

