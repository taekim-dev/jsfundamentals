/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if (nums.length < 2) { return nums.length };

    const dp = new Array(nums.length).fill(1);
    for(let i = 1; i < nums.length; i++) {
        for(let j = 0; j < i; j++) {
            if(nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    return Math.max(...dp);
};


const input1 = [10,9,2,5,3,7,101,18]
const res1 = lengthOfLIS(input1);
console.log(res1 === 4)
 
const input2 = [0,1,0,3,2,3]
const res2 = lengthOfLIS(input2);
console.log(res2 === 4)

const input3 = [7,7,7,7,7,7,7]
const res3 = lengthOfLIS(input3);
console.log(res3 === 1)

const input4 = [9, 8, 7, 6]
const res4 = lengthOfLIS(input4);
console.log(res4 === 1)