/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums) {
    let currMax = nums[0];
    let maxSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        currMax = Math.max(nums[i], currMax + nums[i]);
        maxSum = Math.max(currMax, maxSum);
    }

    return maxSum;

}

const nums1 = [-1]
const res1 = maxSubArray(nums1)
console.log('test1', res1 === -1)

const nums2 = [2,-3,4,-2,2,1,-1,4]
const res2 = maxSubArray(nums2)
console.log('test2', res2 === 8)

const nums3 = [-9,-8,-7,-5]
const res3 = maxSubArray(nums3);
console.log('test3', res3 === -5)

const nums4 = [1, 2, 3, 4, 5];
const res4 = maxSubArray(nums4);
console.log('test4', res4 === 15);
