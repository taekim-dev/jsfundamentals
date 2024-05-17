class Node {
    constructor(val) {
      this.value = val;
      this.left = null;
      this.right = null;
    }
}

/**
 * @param {Node} root
 * @return {string}
 */
function serialize(root) {
    const values = [];
    const queue = [root];
    while (queue.length > 0) {
        const currNode = queue.shift();
        if (currNode !== null) {
            values.push(currNode.value);
            queue.push(currNode.left);
            queue.push(currNode.right);
        } else {
            values.push(null);
        }
    }
    return JSON.stringify(values);
}
  
function deserialize(str) {
    const values = JSON.parse(str);
    if (values.length === 0 || values[0] === null) return null;

    const root = new Node(values[0]);
    const queue = [root];
    let i = 1;
    while (i < values.length) {
        const currNode = queue.shift();

        if (values[i] !== null){
            currNode.left = new Node(values[i]);
            queue.push(currNode.left);
        } 

        i++;

        if (i < values.length && values[i] !== null){
            currNode.right = new Node(values[i]);
            queue.push(currNode.right);
        }

        i++;
    }

    return root;
}
  
function isIdentical(tree1, tree2) {
    if (tree1 === null && tree2 === null) {
        return true;
    }

    if (tree1 === null || tree2 === null) {
        return false;
    }

    if (tree1.value === tree2.value) {
        return isIdentical(tree1.left, tree2.left) && isIdentical(tree1.right, tree2.right)
    }

    return false;
}
  
module.exports = {
    Node,
    serialize,
    deserialize,
    isIdentical
};
  