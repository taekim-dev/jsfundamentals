const { reverseList, ListNode } = require('./reverseLinkedList.js');

describe('Reverse Linked List', () => {
    describe('standard behavior', () => {
        test('handle singliy linked list', () => {
            const node1 = new ListNode(1);
            const node2 = new ListNode(2, node1);
            const node3 = new ListNode(3, node2);

            const reversed = reverseList(node3);
            expect(reversed).toEqual(node1);
        });
    })

    describe('edge cases', () => {
        test('handle empty list', () => {
            const reversed = reverseList(null);
            expect(reversed).toEqual(null);
        });

        test('handle empty list', () => {
            const reversed = reverseList(null);
            expect(reversed).toEqual(null);
        });
    })
})