const { serialize, deserialize, Node, isIdentical } = require('./serializeTree.js');

function createBinaryTree(array) {
    if (array.length === 0) return null;
    const root = new Node(array[0]);
    const queue = [root];
    let i = 1;
    
    while (i < array.length) {
        const node = queue.shift();

        if (array[i] !== null) {
            node.left = new Node(array[i]);
            queue.push(node.left);
        }

        i++;

        if (i < array.length && array[i] !== null) {
            node.right = new Node(array[i]);
            queue.push(node.right);
        }
    }

    return root;
}

describe('Serialize and Deserialize Binary Tree', () => {
  describe('standard behavior', () => {
    test('serialize a simple tree', () => {
      const tree = createBinaryTree([1, 2, 3]);

      const serializedTree = serialize(tree);
      expect(typeof serializedTree).toBe('string');

      const deserializedTree = deserialize(serializedTree);
      expect(isIdentical(tree, deserializedTree)).toBe(true);

      // Additional check for deserialized tree's serialization
      const reSerializedTree = serialize(deserializedTree);
      expect(serializedTree).toEqual(reSerializedTree);
    });

    test('serialize a simple tree with null values', () => {
      const root = new Node(1);
      const left = new Node(2);
      const right = new Node(3);
      root.left = left;
      left.right = right;

      const serializedTree = serialize(root);
      expect(typeof serializedTree).toBe('string');

      const deserializedTree = deserialize(serializedTree);
      expect(isIdentical(root, deserializedTree)).toBe(true);

      // Additional check for deserialized tree's serialization
      const reSerializedTree = serialize(deserializedTree);
      expect(serializedTree).toEqual(reSerializedTree);
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

      const serializedTree = serialize(root);
      expect(typeof serializedTree).toBe('string');

      const deserializedTree = deserialize(serializedTree);
      expect(isIdentical(root, deserializedTree)).toBe(true);
    });
  });

  describe('edge cases', () => {
    test('serialize an empty tree', () => {
      const root = null;
      const serializedTree = serialize(root);
      expect(serializedTree).toBe('null');

      const deserializedTree = deserialize(serializedTree);
      expect(deserializedTree).toBe(root);
    });
  });
});
