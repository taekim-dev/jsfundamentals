/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if(nums.length === 1) return true;

    const currNum = nums[0];
    if(currNum === 0) return false;

    for(let i = 1; i <= currNum; i++) {
        if(canJump(nums.slice(i))){
            return true;
        }
    }

    return false;
};

const nums1 = [2,3,1,1,4]
console.log(canJump(nums1) === true)

const nums2 = [3,2,1,0,4]
console.log(canJump(nums2) === false)

const nums3 = [10]
console.log(canJump(nums3) === true)

const nums4 = [5,0,0,0,0,1]
console.log(canJump(nums3) === true)

