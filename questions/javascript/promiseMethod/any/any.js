
function any(promises) {
    // empty promise => reject
    if (promises.length === 0) {
        return Promise.reject(new AggregateError([], "no promise given"))
    }

    return new Promise((resolve, reject) => {
        const errors = [];
        let rejectCount = 0;
        
        promises.forEach(promise => {
            Promise.resolve(promise)
                .then(value => {
                    resolve(value);
                }).catch(error => {
                    rejectCount++;
                    errors.push(error);

                    if(promises.length === rejectCount) {
                        reject(new AggregateError(errors, "all promises are rejected"));
                    }
                })
        })

    })

}

module.exports = any;

