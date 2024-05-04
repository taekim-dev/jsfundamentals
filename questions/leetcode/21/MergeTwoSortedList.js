function mergeList(list1, list2) {
    if (list1 === null || list2 === null){
        return list1 || list2;
    }

    let dummyHead = new ListNode(0);
    let currMerged = dummyHead;

    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            currMerged.next = list1;
            list1 = list1.next;

        } else {
            currMerged.next = list2;
            list2 = list2.next;
        }
        currMerged = currMerged.next;
    }

    currMerged.next = list1 || list2;

    return dummyHead.next;

}

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

module.exports = {
    mergeList,
    ListNode
};

