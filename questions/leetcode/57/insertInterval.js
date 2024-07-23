/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let newIntervals = [];
    let i = 0;

    // Add all intervals ending before newInterval starts
    while (i < intervals.length && intervals[i][1] < newInterval[0]) {
        newIntervals.push(intervals[i]);
        i++;
    }

    // Merge all overlapping intervals to one considering newInterval
    while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
        newInterval = [
            Math.min(intervals[i][0], newInterval[0]),
            Math.max(intervals[i][1], newInterval[1])
        ];
        i++;
    }
    newIntervals.push(newInterval);

    // Add all the rest
    while (i < intervals.length) {
        newIntervals.push(intervals[i]);
        i++;
    }

    return newIntervals;
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
