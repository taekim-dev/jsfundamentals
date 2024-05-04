
// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(head === null || !head.next) return head
    
    let prev = null;
    let curr = head;

    while(curr){
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    return prev
};

module.exports = {
    reverseList,
    ListNode
};
