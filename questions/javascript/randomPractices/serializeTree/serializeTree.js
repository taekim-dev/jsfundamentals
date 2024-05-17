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


}
  
/**
 * @param {string} str
 * @return {Node}
 */
function deserialize(str) {

}
  
function isIdentical(tree1, tree2) {
    if (tree1.val !== tree2.val) {
        return false;
    }

    return isIdentical(tree1.left, tree2.left) && isIdentical(tree1.right, tree2.right)
}

function isIdentical(tree1, tree2) {
    const queue1 = [tree1]
    const queue2 = [tree2]

    while(queue1.length > 0 && queue2.length > 0) {
        const curr1 = queue1.shift();
        const curr2 = queue2.shift();

        if (curr1.val !== curr2.val) {
            return false;
        }

        if (curr1.left !== null && curr2.left !== null){
            queue1.push(curr1.left);
            queue2.push(curr2.right);
        } 
        if (curr1.right !== null && curr2.right !== null){
            queue1.push(curr1.right);
            queue2.push(curr2.right);
        } 
    }

    return true;
}
  
module.exports = {
    Node,
    serialize,
    deserialize,
    isIdentical
};
  