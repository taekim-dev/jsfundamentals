// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
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
            queue.push([level + 1, node.right]);
        }
    }

    return res;
};

const buildTree = (array) => {
    if (array.length === 0) return null;

    const root = new TreeNode(array[0]);
    const queue = [root];
    let i = 1;

    while (i < array.length) {
        const current = queue.shift();

        if (array[i] !== null) {
            current.left = new TreeNode(array[i]);
            queue.push(current.left);
        }

        i++;

        if (i < array.length && array[i] !== null) {
            current.right = new TreeNode(array[i]);
            queue.push(current.right);
        }

        i++;
    }

    return root;
}


const testCases = [
    {
        input: [3, 9, 20, null, null, 15, 7],
        expectedOutput: [[3], [9, 20], [15, 7]]
    },
    {
        input: [],
        expectedOutput: []
    },
    {
        input: [1],
        expectedOutput: [[1]]
    },
    {
        input: [1, 2, 3, 4, 5, 6, 7],
        expectedOutput: [[1], [2, 3], [4, 5, 6, 7]]
    },
    {
        input: [1, null, 2, null, 3, null, 4, null, 5],
        expectedOutput: [[1], [2], [3], [4], [5]]
    },
    {
        input: [1, 2, 3, 4, null, null, 5, 6, null, 7],
        expectedOutput: [[1], [2, 3], [4, 5], [6, 7]]
    }
];

testCases.forEach(test => {
    const tree = buildTree(test.input);
    const output = levelOrderTraversal(tree);
    console.log(JSON.stringify(output) === JSON.stringify(test.expectedOutput));
})