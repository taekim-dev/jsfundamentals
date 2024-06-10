/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderTraversal = function(root) {
    
};


const input = [3, 9, 20, null, null, 15, 7];
const expectedOutput = [[3], [9, 20], [15, 7]];
const root = buildTree(input);
const output = levelOrderTraversal(root);

console.log(JSON.stringify(output) === JSON.stringify(expectedOutput)); // Should print: true