/**
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns the composed aggregate object.
 */
// export default function countBy(array, iteratee) {
//     const counter = {};

//     array.forEach(element => {
//         let key = iteratee(element)
//         if (key !== null && key !== undefined) {
//             key = key.toString();
//         } else {
//             key = 'undefined';
//         }

//         if (counter.hasOwnProperty(key)) {
//             counter[key]++;
//         } else {
//             counter[key] = 1;
//         }
//     })

//     return counter;
// }

export default function countBy(array, iteratee) {
    return array.reduce((counter, element) => {
        let key = iteratee(element);

        key = key !== undefined && key !== null ? key.toString() : 'undefined';

        counter[key] = (counter[key] || 0) + 1;

        return counter;
    }, {})
}