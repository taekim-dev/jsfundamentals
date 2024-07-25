import _ from 'lodash';

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

let intervals = [[1, 3], [6, 9]];
let newInterval = [2, 5];
let newIntervals = insert(intervals, newInterval);
console.log(_.isEqual(newIntervals, [[1, 5], [6, 9]])); // true

let intervals2 = [];
let newInterval2 = [2, 5];
let newIntervals2 = insert(intervals2, newInterval2);
console.log(_.isEqual(newIntervals2, [[2, 5]])); // true

let intervals3 = [[1, 3], [6, 9]];
let newInterval3 = [4, 5];
let newIntervals3 = insert(intervals3, newInterval3);
console.log(_.isEqual(newIntervals3, [[1, 3], [4, 5], [6, 9]])); // true

let intervals4 = [[3, 4], [6, 9]];
let newInterval4 = [2, 5];
let newIntervals4 = insert(intervals4, newInterval4);
console.log(_.isEqual(newIntervals4, [[2, 5], [6, 9]])); // true
