/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {}
}

const intervals1 = [(0,40),(5,10),(15,20)]
const output1 = minMeetingRooms(intervals1);

console.log(output1 === 2)

const intervals2 = [(4,9)]
const output2 = minMeetingRooms(intervals2);

console.log(output2 === 1)
