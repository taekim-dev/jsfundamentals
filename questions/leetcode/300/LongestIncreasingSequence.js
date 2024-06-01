/**
 * Given an integer array nums, 
 * return the length of the longest strictly increasing subsequence
 *
 * @param {number[]} nums
 * @return {number}
 */
// O(N^2) solution
var lengthOfLIS = function(nums) {
    if (nums.length < 2) return nums.length;

    let dp = [];
    nums.forEach(num => {
        if (dp.length === 0 || dp[dp.length - 1] < num) {
            dp.push(num);
        } else {
            findAndReplace(dp, num);
        }
    });

    return dp.length;
};

// find the smallest element bigger than num, and replace that element with num
const findAndReplace = function (array, num) {
    let start = 0;
    let end = array.length - 1;

    while (start < end) {
        const mid = Math.floor((start + end) / 2);
        if (array[mid] < num) {
            start = mid + 1;
        } else {
            end = mid;
        }
    }
    array[start] = num;
};


const input1 = [10,9,2,5,3,7,101,18]
const res1 = lengthOfLIS(input1); // 2, 3, 7, 101
console.log('input1 ', res1 === 4)
 
const input2 = [0,1,0,3,2,3]
const res2 = lengthOfLIS(input2);
console.log('input2 ', res2 === 4) // 0, 1, 2, 3

const input3 = [7,7,7,7,7,7,7]
const res3 = lengthOfLIS(input3);
console.log('input3 ', res3 === 1)

const input4 = [9, 8, 7, 6]
const res4 = lengthOfLIS(input4);
console.log('input4 ', res4 === 1)

const input5 = []
const res5 = lengthOfLIS(input5);
console.log('input5 ', res5 === 0)