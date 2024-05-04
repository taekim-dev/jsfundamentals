// Iterative solution
// function mergeList(list1, list2) {
//     let dummyHead = new ListNode(0);
//     let current = dummyHead;

//     while (list1 !== null && list2 !== null) {
//         if (list1.val < list2.val) {
//             current.next = list1;
//             list1 = list1.next;

//         } else {
//             current.next = list2;
//             list2 = list2.next;
//         }
//         current = current.next;
//     }

//     current.next = list1 !== null ? list1 : list2;

//     return dummyHead.next;

// }

// Recursive solution
function mergeList(list1, list2) {
    if (list1 === null) return list2
    if (list2 === null) return list1

    if (list1.val < list2.val) {
        list1.next = mergeList(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeList(list1, list2.next)
        return list2;
    }
}

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

module.exports = {
    mergeList,
    ListNode
};

