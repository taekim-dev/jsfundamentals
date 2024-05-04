const { reverseList, ListNode } = require('./reverseLinkedList.js');

describe('Reverse Linked List', () => {
    describe('standard behavior', () => {
        test('handle singliy linked list with values', () => {
            const node1 = new ListNode(1);
            const node2 = new ListNode(2, node1);
            const node3 = new ListNode(3, node2);
            const reversed = reverseList(node3);

            expect(reversed.val).toEqual(1);
            expect(reversed.next).toEqual(node2);

        });
    })

    describe('edge cases', () => {
        test('handle empty list', () => {
            const reversed = reverseList(null);
            expect(reversed).toEqual(null);
        });

        test('handle single linked list', () => {
            const node = new ListNode(0)
            const reversed = reverseList(node);
            expect(reversed.val).toEqual(0);
            expect(reversed.next).toEqual(null);
        });
    })
})