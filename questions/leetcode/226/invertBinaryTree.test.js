const { invertTree, TreeNode } = require('./invertBinaryTree.js')

describe('invertTree', () => {
    describe('standard behavior', () => {
        test('', () => {

            expect(result).toEqual(false);
        });

        test('', () => {
            expect(result).toEqual(true);
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