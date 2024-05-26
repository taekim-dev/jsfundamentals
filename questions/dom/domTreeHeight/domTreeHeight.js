
/**
 * Recursive
 * @param {HTMLElement | null} tree
 * @return {number}
 */
// export function getTreeHeight(tree) {
//     if (!tree) return 0;

//     let depth = 0;
//     for (let childNode of tree.children) {
//         depth = Math.max(depth, getTreeHeight(childNode));
//     }

//     return depth + 1;
// }


/**
 * Iterative
 * @param {HTMLElement | null} tree
 * @return {number}
 */
export function getTreeHeight(tree) {
    if (!tree) return 0;

    let queue = [{node: tree, depth: 1}];
    let maxDepth = 1;
    while (queue.length > 0) {
        const {node, depth} = queue.shift();
        maxDepth = Math.max(maxDepth, depth);

        for (let child of node.children) {
            queue.push({node : child, depth : depth + 1});
        }
    }

    return maxDepth;

}