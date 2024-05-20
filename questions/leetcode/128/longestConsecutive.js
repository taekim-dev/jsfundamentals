/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0;
    
    const numSet = new Set(nums);
    let longest = 0;

    for(let num of numSet) {
        if(!numSet.has(num - 1)) {
            
            let currNum = num
            let currentStreak = 1;
            
            while (numSet.has(currNum + 1)) {
                currentStreak++;
                currNum++;
            }

            longest = Math.max(longest, currentStreak)
        }
    }

    return longest
};

const nums1 = [100,4,200,1,3,2];
const res1 = longestConsecutive(nums1);
const expected1 = 4;
console.log(res1)
console.log('test 1 passed?', res1 === expected1);

const nums2 = [0,3,7,2,5,8,4,6,0,1];
const res2 = longestConsecutive(nums2);
const expected2 = 9;
console.log('test 2 passed?', res2 === expected2);

const nums3 = [];
const res3 = longestConsecutive(nums3);
const expected3 = 0;
console.log('test 3 passed?', res3 === expected3);

const nums4 = [9,8,7,6,5,4,3,2,1];
const res4 = longestConsecutive(nums4);
const expected4 = 9;
console.log('test 4 passed?', res4 === expected4);

console.log('test done');