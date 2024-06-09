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
function parallel(funcs){
    return function(callback, data) {
        let results = [];
        let completed = 0;
        let hasError = false;

        funcs.forEach((func, index) => {
            func((error, result) => {
                if(hasError) return;

                if(error) {
                    hasError = true;
                    callback(error, null);
                } else {
                    result[index] = result;
                    completed += 1;

                    if(completed === func.length) {
                        callback(null, results);
                    }
                }
            }, data);
        })
    }
}


const async1 = (callback) => {
    callback(undefined, 1)
}

const async2 = (callback) => {
    callback(undefined, 2)
}

const async3 = (callback) => {
    callback(undefined, 3)
}

const all = parallel(
    [
        async1,
        async2,
        async3
    ]
)

all((error, data) => {
    console.log(data) // [1, 2, 3]
}, 1)