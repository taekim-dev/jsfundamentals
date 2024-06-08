class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {}
}


const nums0 = []
const res0 = maxSubArray(nums0)
console.log('test0', res1 === 0)

const nums1 = [-1]
const res1 = maxSubArray(nums1)
console.log('test1', res1 === -1)

const nums2 = [2,-3,4,-2,2,1,-1,4]
const res2 = maxSubArray(nums2)
console.log('test2', res2 === 8)

const nums3 = [-9,-8,-7,-5]
const res3 = maxSubArray(nums3);
console.log('test3', res3 === 0)
