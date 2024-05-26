
/**
 * @param {HTMLElement | null} tree
 * @return {number}
 */
export function getTreeHeight(tree) {



    let height = 0;
    if (tree) {
        height += 1;
        return Math.max(tree.left, tree.right);    
    }
    
}