function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
/*
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderTraversal = function(root) {
    if (!root) return [];

    const res = [];
    const queue = [[0, root]];

    while (queue.length > 0) {
        let [level, node] = queue.shift();
        if (Array.isArray(res[level])) {
            res[level].push(node.val);
        } else {
            res[level] = [node.val];
        }

        if (node.left) {
            queue.push([level + 1, node.left]);
        } 

        if (node.right) {
            queue.push([level + 1, node.right])
        }

    }

    return res;
};




const input = [3, 9, 20, null, null, 15, 7];
const expectedOutput = [[3], [9, 20], [15, 7]];
const root = buildTree(input);
const output = levelOrderTraversal(root);

console.log(JSON.stringify(output) === JSON.stringify(expectedOutput)); // Should print: true