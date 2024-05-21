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
      if (intervals.length < 2) {
        return intervals.length
      }

      intervals.sort((a, b) => a.start - b.start);
      let meetingRooms = 1;
      let earliestAvailable = intervals[0].end;
      for (let i = 1; i < intervals.length; i++) {
        if (earliestAvailable > intervals[i].start) {
            meetingRooms++;            
        } 
        earliestAvailable = Math.min(earliestAvailable, intervals[i].end)
      }

      return meetingRooms;
    }
  }
  
  const solution = new Solution();
  
  const intervals1 = [new Interval(0, 40), new Interval(5, 10), new Interval(15, 20)];
  const output1 = solution.minMeetingRooms(intervals1);
  console.log("intervals1" , output1 === 2);
  
  const intervals2 = [new Interval(4, 9)];
  const output2 = solution.minMeetingRooms(intervals2);
  console.log("intervals2" ,output2 === 1);

  // No meetings
  const intervals3 = [];
  const output3 = solution.minMeetingRooms(intervals3);
  console.log("intervals3" ,output3 === 0);
  
  // Meetings that do not overlap
  const intervals4 = [new Interval(0, 5), new Interval(6, 10), new Interval(11, 15)];
  const output4 = solution.minMeetingRooms(intervals4);
  console.log("intervals4" ,output4 === 1);
  
  // Meetings that start at the same time
  const intervals5 = [new Interval(1, 10), new Interval(1, 5), new Interval(1, 8)];
  const output5 = solution.minMeetingRooms(intervals5);
  console.log("intervals5" ,output5 === 3);
  
  // Meetings with varying overlap
  const intervals6 = [new Interval(0, 30), new Interval(5, 10), new Interval(15, 20), new Interval(25, 35)];
  const output6 = solution.minMeetingRooms(intervals6);
  console.log("intervals6" ,output6 === 2);
  
  // Meetings that end when another starts
  const intervals7 = [new Interval(0, 5), new Interval(5, 10), new Interval(10, 15)];
  const output7 = solution.minMeetingRooms(intervals7);
  console.log("intervals7" ,output7 === 1);
  
  // Multiple meetings at the same time
  const intervals8 = [new Interval(0, 5), new Interval(0, 5), new Interval(0, 5)];
  const output8 = solution.minMeetingRooms(intervals8);
  console.log("intervals8" ,output8 === 3);
  