const { serialize, deserialize } = require('./serializeTree.js')

class Node {
  constructor(val) {
    this.value = val
    this.left = null
    this.right = null
  }
}

function createBinaryTree (array) {

}

describe('Serialize and Deserialize Binrary Tree', () => {
    describe('standard behavior', () => {
        test('serialize a simple tree', () => {
            const root = new Node(1);
            const left = new Node(2);
            const right = new Node(3);
            root.left = left;
            root.right = right;

            const serizliedTree = serialize(root);
            expect(serizliedTree).toEqual([1, 2, 3]);

            const deserializedTree = deserialize(serizliedTree);
            expect(deserializedTree).toEqual(root);
        });

        test('serialize a complex tree', () => {
            expect().toEqual();
        });

        test('description', () => {
            expect().toEqual();
        });
    })

    describe('edge cases', () => {
        test('serialize an empty tree', () => {
        });
    })
})