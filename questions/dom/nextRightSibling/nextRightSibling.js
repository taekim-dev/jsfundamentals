
/**
 * @param {HTMLElement} root
 * @param {HTMLElement} target
 * @return {HTMLElemnt | null}
 */
// function nextRightSibling(root, target) {
//     if (!root || !target) return null;

//     const queue = [root];

//     while(queue.length > 0) {
//         const currNode = queue.shift();

//         if (currNode === target) {
//             return currNode.nextElementSibling;
//         }

//         for (let i = 0; i < currNode.children.length; i++) {
//             queue.push(currNode.children[i]);
//         }
//     }

//     return null;
// }

function nextRightSibling(root, target) {
    if (!root || !target) return null;

    const queue = [{node : root, level : 0}];
    let foundTarget = false;
    let targetLevel = 0;

    while (queue.length > 0) {
        const { node, level } = queue.shift();

        if (foundTarget) {
            if (targetLevel === level) {
                return node;
            } else {
                return null;
            }
        }

        if (node === target) {
            foundTarget = true;
            targetLevel = level;
        }

        for (let i = 0; i < node.children.length; i++) {
            queue.push({node: node.children[i], level: level + 1})
        }
    }
}

/*
<div id="root">
    <div id="child1">Child 1</div>
    <div id="child2">Child 2</div>
    <div id="child3">Child 3</div>
</div>

<script>
    const root = document.getElementById('root');
    const target = document.getElementById('child2');
    const nextSibling = nextRightSibling(root, target);

    if (nextSibling) {
        console.log(nextSibling.id); // Should log "child3"
    } else {
        console.log("No next right sibling found.");
    }
</script>
*/