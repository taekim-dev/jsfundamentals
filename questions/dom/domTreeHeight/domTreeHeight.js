
/**
 * @param {HTMLElement | null} tree
 * @return {number}
 */
export function getTreeHeight(tree) {
    if (!tree) return 0;

    let depth = 0;
    for (let childNode of tree.children) {
        depth = Math.max(depth, getTreeHeight(childNode));
    }

    return depth + 1;
}