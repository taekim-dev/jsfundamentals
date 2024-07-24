/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let farthest = 0;

    for(let i = 0; i < nums.length; i++) {
        if (i > farthest) return false;

        farthest = Math.max(farthest, i + nums[i]);
    }

    return true;
};

const nums1 = [2,3,1,1,4]
console.log(canJump(nums1) === true)

const nums2 = [3,2,1,0,4]
console.log(canJump(nums2) === false)

const nums3 = [10]
console.log(canJump(nums3) === true)

const nums4 = [5,0,0,0,0,1]
console.log(canJump(nums3) === true)

