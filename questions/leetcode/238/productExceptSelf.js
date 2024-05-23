
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    if (nums.length < 2) return nums;

    let i = 0;
    let j = nums.length - 1;

    let res = new Array(nums.length).fill(1);

    let currProduct = 1;
    while(i < nums.length) {
        res[i] *= currProduct
        currProduct *= nums[i];
        i++;
    }

    currProduct = 1;
    while(j >= 0) {
        res[j] *= currProduct
        currProduct *= nums[j];
        j--;
    }

    return res;
};

const nums1 = [1, 2, 3, 4];
const res1 = productExceptSelf(nums1);
const expected1 = [24,12,8,6];

const nums2 = [-1, 1, 0, -3, 3];
const res2 = productExceptSelf(nums2);
const expected2 = [0,0,9,0,0];

const nums3 = [1, 1, 1, 1, 1];
const res3 = productExceptSelf(nums3);
const expected3 = [1, 1, 1, 1, 1];

const nums4 = [];
const res4 = productExceptSelf(nums4);
const expected4 = [];

function checkMismatch(expected, res) {
    if (expected === null || res === null) {
        console.log('one of the values is null');
        return;
    }

    if (expected === undefined || res === undefined) {
        console.log('one of the values is undefined');
        return;
    }

    if (!Array.isArray(expected) || !Array.isArray(res)) {
        console.log('one of the values is not an array');
        return;
    }

    expected.forEach((num, i) => {
        if(res[i] !== num) {
            console.log(`mismatch! on ${i}th element: `, expected[i])
            console.log('res: ', res);
            return;
        }
    })
}

checkMismatch(expected1, res1);
checkMismatch(expected2, res2);
checkMismatch(expected3, res3);
checkMismatch(expected4, res4);