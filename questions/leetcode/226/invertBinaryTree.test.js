const { invertTree, TreeNode } = require('./invertBinaryTree.js')

describe('invertTree', () => {
    describe('handles a simple tree', () => {
        test('', () => {
            const node2 = new TreeNode(2);
            const node3 = new TreeNode(3);
            const root = new TreeNode(1, node2, node3);
            const res = invertTree(root);
            const inverted = new TreeNode(1, node3, node2)

            expect(res).toEqual(inverted);
        });

        test('handles a complex tree', () => {
            // Leaf nodes
            const node1 = new TreeNode(1);
            const node3 = new TreeNode(3);
            const node6 = new TreeNode(6);
            const node9 = new TreeNode(9);

            // Internal nodes
            const node2 = new TreeNode(2, node1, node3);
            const node7 = new TreeNode(7, node6, node9);

            // Root node
            const root = new TreeNode(4, node2, node7);

            // Internal nodes for inverted structure
            const invNode2 = new TreeNode(2, node3, node1);
            const invNode7 = new TreeNode(7, node9, node6);

            // Root node for inverted structure
            const inverted = new TreeNode(4, invNode7, invNode2);

            const res = invertTree(root);

            expect(res).toEqual(inverted);
        });
        
    })

    describe('edge case', () => {
        test('handles an empty tree', () => {
            const tree = null;
            const res = invertTree(tree);

            expect(res).toEqual(tree);
        });

        test('handles a tree with no child', () => {
            const tree = new TreeNode(0, null, null);
            const res = invertTree(tree);

            expect(res).toEqual(tree);
        });

    })
})