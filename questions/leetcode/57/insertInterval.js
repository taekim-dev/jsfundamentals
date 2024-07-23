/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    
};

let intervals = [[1,3], [6,9]];
let newInterval = [2,5];
let newIntervals = insert(intervals, newInterval);
console.log(arraysEqual(newIntervals, [[1,5], [6,9]]))

let intervals2 = [];
let newInterval2 = [2,5];
let newIntervals2 = insert(intervals2, newInterval2);
console.log(arraysEqual(newInterval2, [[2,5]]))

let intervals3 = [[1,3], [6,9]];
let newInterval3 = [4,5];
let newIntervals3 = insert(intervals3, newInterval3);
console.log(arraysEqual(newIntervals3, [[1,3], [4,5], [6,9]]))


var arraysEqual = function(array1, array2) {
    if (array1.length !== array2.length) return false;

    for(let i = 0; i < array1.length; i++) {
        if (Array.isArray(array1[i]) && Array.isArray(array2[i])) {
            if(!arraysEqual(array1, array2)) return false;
        } else {
            if (array1[i] !== array2[i]) return false;
        }
    }

    return true;
}