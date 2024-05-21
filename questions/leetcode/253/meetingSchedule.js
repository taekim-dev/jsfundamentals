class Interval {
    constructor(start, end) {
      this.start = start;
      this.end = end;
    }
  }
  
  class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
      // Implementation to be added
    }
  }
  
  const solution = new Solution();
  
  const intervals1 = [new Interval(0, 40), new Interval(5, 10), new Interval(15, 20)];
  const output1 = solution.minMeetingRooms(intervals1);
  console.log(output1 === 2);
  
  const intervals2 = [new Interval(4, 9)];
  const output2 = solution.minMeetingRooms(intervals2);
  console.log(output2 === 1);
  
  // Additional Test Cases
  
  // No meetings
  const intervals3 = [];
  const output3 = solution.minMeetingRooms(intervals3);
  console.log(output3 === 0);
  
  // Meetings that do not overlap
  const intervals4 = [new Interval(0, 5), new Interval(6, 10), new Interval(11, 15)];
  const output4 = solution.minMeetingRooms(intervals4);
  console.log(output4 === 1);
  
  // Meetings that start at the same time
  const intervals5 = [new Interval(1, 10), new Interval(1, 5), new Interval(1, 8)];
  const output5 = solution.minMeetingRooms(intervals5);
  console.log(output5 === 3);
  
  // Meetings with varying overlap
  const intervals6 = [new Interval(0, 30), new Interval(5, 10), new Interval(15, 20), new Interval(25, 35)];
  const output6 = solution.minMeetingRooms(intervals6);
  console.log(output6 === 2);
  
  // Meetings that end when another starts
  const intervals7 = [new Interval(0, 5), new Interval(5, 10), new Interval(10, 15)];
  const output7 = solution.minMeetingRooms(intervals7);
  console.log(output7 === 1);
  
  // Multiple meetings at the same time
  const intervals8 = [new Interval(0, 5), new Interval(0, 5), new Interval(0, 5)];
  const output8 = solution.minMeetingRooms(intervals8);
  console.log(output8 === 3);
  