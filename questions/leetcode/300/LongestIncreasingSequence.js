/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    
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
console.log(res4 === 0)