/**
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns the composed aggregate object.
 */
export default function countBy(array, iteratee) {
    const counter = {};

    array.forEach(element => {
        let key = iteratee(element)
        if (key) {
            key = key.toString();
        } else {
            key = undefined;
        }

        if (counter.hasOwnProperty(key)) {
            counter[key]++;
        } else {
            counter[key] = 1;
        }
    })

    return counter;
}