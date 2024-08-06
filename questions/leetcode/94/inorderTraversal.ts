/**
 * @param {SampleTreeNode | null} root
 * @return {number[]}
 */
var inorderTraversal = function(root: SampleTreeNode | null) : number[] {
    let res: number[] = [];
    if (!root) return res;

    res = res.concat(inorderTraversal(root.left));
    res.push(root.val);
    res = res.concat(inorderTraversal(root.right));

    return res;
};

/**
 * @param {SampleTreeNode | null} root
 * @return {number[]}
 */
var inorderTraversal = function(root: SampleTreeNode | null): number[] {
    const res: number[] = [];
    const stack: SampleTreeNode[] = [];
    let current: SampleTreeNode | null = root ?? null;
    
    while (current !== null || stack.length > 0) {

        while (current !== null) {
            stack.push(current);
            current = current.left;
        }

        current = stack.pop()!;
        res.push(current.val);
        current = current.right;
    }

    return res;
};

let root1 = new SampleTreeNode(1);
root1.right = new SampleTreeNode(2);
root1.right.left = new SampleTreeNode(3);
//[1, 3, 2]


let root2 = null;
//[]

let root3 = new SampleTreeNode(1);
//[1]