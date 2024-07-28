class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isValidBST(root) {
        return this.isBST(root, -Infinity, Infinity);
    }

    isBST(node, min, max) {
        if(!node) return true;

        if(node.val <= min || node.val >= max) return false;

        return this.isBST(node.left, min, node.val) && this.isBST(node.right, node.val, max);
    }
}


const root1 = null;
console.log(new Solution().isValidBST(root1) === true);

const root2 = new TreeNode(10);
console.log(new Solution().isValidBST(root2) === true);

const root3 = new TreeNode(10);
root3.left = new TreeNode(5);
root3.right = new TreeNode(15);
console.log(new Solution().isValidBST(root3) === true);

const root4 = new TreeNode(10);
root4.left = new TreeNode(15);
root4.right = new TreeNode(20);
console.log(new Solution().isValidBST(root4) === false);