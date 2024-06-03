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
    });
}

module.exports = race;
