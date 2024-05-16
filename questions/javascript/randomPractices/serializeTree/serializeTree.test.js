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

        test('serialize a simple tree with null values', () => {
            const root = new Node(1);
            const left = new Node(2);
            const right = new Node(3);
            root.left = left;
            left.right = right;

            const serizliedTree = serialize(root);
            expect(serizliedTree).toEqual([1, 2, null, null, 3]);

            const deserializedTree = deserialize(serizliedTree);
            expect(deserializedTree).toEqual(root);
        });

        test('serialize a complex tree', () => {
            const root = new Node(1);

            root.left = new Node(2);
            root.right = new Node(3);

            root.left.left = new Node(4);

            root.left.left.left = new Node(6);
            root.left.left.right = new Node(7);

            root.right.right = new Node(5);

            root.right.right.left = new Node(8);
            root.right.right.left.right = new Node(9);

            const serizliedTree = serialize(root);
            expect(serizliedTree).toEqual([1,2,3,4,null,null,5,6,7,8,null,null,null,null,9]);

            const deserializedTree = deserialize(serizliedTree);
            expect(deserializedTree).toEqual(root);
        });
    })

    describe('edge cases', () => {
        test('serialize an empty tree', () => {
            const root = null;
            const serizliedTree = serialize(root);
            expect(serizliedTree).toEqual(null);

            const deserializedTree = deserialize(serizliedTree);
            expect(deserializedTree).toEqual(root);
        });
    })
})