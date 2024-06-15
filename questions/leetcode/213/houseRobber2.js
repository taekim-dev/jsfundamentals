class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (nums.length === 0) return 0;
        if (nums.length === 1) return nums[0];

        const robLinear = (arr) => {
            let n = arr.length;
            if (n === 0) return 0;
            if (n === 1) return arr[0];

            let dp = new Array(n).fill(0);
            dp[0] = arr[0];
            dp[1] = Math.max(arr[0], arr[1]);

            for(let i = 2; i < n; i++) {
                dp[i] = Math.max(dp[i-1], dp[i-2] + arr[i]);
            }

            return dp[n-1];
        }

        return Math.max(robLinear(nums.slice(1)), robLinear(nums.slice(0, nums.length - 1)));
        
    }
}


const solution = new Solution();
const res1 = solution.rob([3,4,3]);
console.log(res1 === 4);

const res2 = solution.rob([2,9,8,3,6]);
console.log(res2 === 15);

const res3 = solution.rob([]);
console.log(res3 === 0);