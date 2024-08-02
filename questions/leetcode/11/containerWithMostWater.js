/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxContainer = 0;
    let left = 0;
    let right = height.length-1;

    while (left < right) {
        const leftHeight = height[left];
        const rightHeight = height[right];

        const currContainer = Math.min(leftHeight, rightHeight) * (right - left);
        maxContainer = Math.max(currContainer, maxContainer);

        if (left < right) {
            left++;
        } else {
            right--;
        }
    }

    return maxContainer;
};

const height1 = [1,8,6,2,5,4,8,3,7];
const res1 = maxArea(height1);
console.log(res1 === 49);

const height2 = [1,1];
const res2 = maxArea(height2);
console.log(res2 === 1);