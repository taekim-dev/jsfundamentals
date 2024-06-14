class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {

    }
}


const solution = new Solution();
const res1 = solution.rob([3,4,3]);
console.log(res1 === 4);

const res2 = solution.rob([2,9,8,3,6]);
console.log(res2 === 15);

const res3 = solution.rob([]);
console.log(res3 === 0);