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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let res = [];
    if (!root) return res;

    res = res.concat(inorderTraversal(root.left));
    res.push(root.val);
    res = res.concat(inorderTraversal(root.right));

    return res;
};

var inorderTraversal = function(root) {
    const res = [];
    const stack = [];
    let current = root;
    
    while (current !== null || stack.length > 0) {

        while (current !== null) {
            stack.push(current);
            current = current.left;
        }

        current = stack.pop();
        res.push(current.val);
        current = current.right;
    }

    return res;
};

let root1 = new TreeNode(1);
root1.right = new TreeNode(2);
root1.right.left = new TreeNode(3);
//[1, 3, 2]


let root2 = null;
//[]

let root3 = new TreeNode(1);
//[1]