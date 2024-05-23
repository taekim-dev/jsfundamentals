
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    return nums;
};

const nums1 = [1, 2, 3, 4];
const res1 = productExceptSelf(nums1);
const expected1 = [24,12,8,6];

const nums2 = [-1, 1, 0, -3, 3];
const res2 = productExceptSelf(nums1);
const expected2 = [0,0,9,0,0];


function checkMismatch(expected, res) {
    expected.forEach((num, i) => {
        if(res[i] !== num) {
            console.log(`mismatch! on {i}th element: `, expected[i])
        }
    })
}

checkMismatch(expected1, res1);
checkMismatch(expected2, res2);