// Given the root of a binary tree, invert the tree, and return its root.
// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]

// Binary Tree Node
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

function invertTree(root){
    if (!root) {
        return null
    }

    const tempLeft = root.left;
    root.left = invertTree(root.right);
    root.right = invertTree(tempLeft);

    return root;
}

module.exports = {
    invertTree,
    TreeNode
}
