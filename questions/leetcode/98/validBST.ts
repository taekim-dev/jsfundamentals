class SampleTreeNode {
    public val: number;
    public left: SampleTreeNode | null;
    public right: SampleTreeNode | null;

    constructor(val: number = 0, left: SampleTreeNode | null = null, right: SampleTreeNode | null = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class SampleSolution {
    /**
     * Checks if a binary tree is a valid binary search tree (BST).
     * @param {SampleTreeNode | null} root - The root of the binary tree.
     * @return {boolean} True if the tree is a valid BST, false otherwise.
     */
    public isValidBST(root: SampleTreeNode | null): boolean {
        const MIN_VALUE = -Infinity;
        const MAX_VALUE = Infinity;
        return this.isBST(root, MIN_VALUE, MAX_VALUE);
    }

    /**
     * Recursive helper function to validate the BST.
     * @param {SampleTreeNode | null} node - The current node.
     * @param {number} min - The minimum value allowed for the current node.
     * @param {number} max - The maximum value allowed for the current node.
     * @return {boolean} True if the subtree rooted at the current node is a valid BST, false otherwise.
     */
    private isBST(node: SampleTreeNode | null, min: number, max: number): boolean {
        if (!node) return true;

        if (node.val <= min || node.val >= max) return false;

        return this.isBST(node.left, min, node.val) && this.isBST(node.right, node.val, max);
    }
}


const sampleRoot1 : SampleTreeNode | null = null;
console.log(new SampleSolution().isValidBST(sampleRoot1) === true);

const sampleRoot2 : SampleTreeNode = new SampleTreeNode(10);
console.log(new SampleSolution().isValidBST(sampleRoot2) === true);

const sampleRoot3 : SampleTreeNode = new SampleTreeNode(10);
sampleRoot3.left = new SampleTreeNode(5);
sampleRoot3.right = new SampleTreeNode(15);
console.log(new SampleSolution().isValidBST(sampleRoot3) === true);

const sampleRoot4 : SampleTreeNode = new SampleTreeNode(10);
sampleRoot4.left = new SampleTreeNode(15);
sampleRoot4.right = new SampleTreeNode(20);
console.log(new SampleSolution().isValidBST(sampleRoot4) === false);