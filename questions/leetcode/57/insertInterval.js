/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    intervals.push(newInterval);
    const newIntervals = intervals.sort((a, b) => a[0] - b[0]);
    console.log(newIntervals);
};

var arraysEqual = function(array1, array2) {
    if (!Array.isArray(array1) || !Array.isArray(array2)) return false;
    if (array1.length !== array2.length) return false;

    for (let i = 0; i < array1.length; i++) {
        if (Array.isArray(array1[i]) && Array.isArray(array2[i])) {
            if (!arraysEqual(array1[i], array2[i])) return false;
        } else {
            if (array1[i] !== array2[i]) return false;
        }
    }

    return true;
}

let intervals = [[1, 3], [6, 9]];
let newInterval = [2, 5];
let newIntervals = insert(intervals, newInterval);
console.log(arraysEqual(newIntervals, [[1, 5], [6, 9]])); // true

let intervals2 = [];
let newInterval2 = [2, 5];
let newIntervals2 = insert(intervals2, newInterval2);
console.log(arraysEqual(newIntervals2, [[2, 5]])); // true

let intervals3 = [[1, 3], [6, 9]];
let newInterval3 = [4, 5];
let newIntervals3 = insert(intervals3, newInterval3);
console.log(arraysEqual(newIntervals3, [[1, 3], [4, 5], [6, 9]])); // true

let intervals4 = [[3, 4], [6, 9]];
let newInterval4 = [2, 5];
let newIntervals4 = insert(intervals4, newInterval4);
console.log(arraysEqual(newIntervals4, [[2, 5], [6, 9]])); // true
