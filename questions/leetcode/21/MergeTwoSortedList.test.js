const { mergeList, ListNode } = require('./MergeTwoSortedList.js')

function createLinkedList(values) {
    if (!values || values.length === 0) return null;
    let head = new ListNode(values[0]);
    let current = head;
    for (let i = 1; i < values.length; i++) {
        current = new ListNode(values[i]);
        current = current.next;
    }
    return head;
}

describe('Merge Two Sorted List', () => {
    describe('standard behavior', () => {
        test('handle two sorted lists', () => {
            const list1 = createLinkedList([1, 3, 5]);
            const list2 = createLinkedList([1, 4, 6]);
            const merged = mergeList(list1, list2)
            const expected = createLinkedList([1, 1, 3, 4, 5, 6]);

            expect(merged).toEqual(expected);
        });

        test('handle two complex unsorted lists', () => {

            expect().toEqual();
        });
    })

    describe('edge cases', () => {
        test('handles two empty lists', () => {
            const list1 = null;
            const list2 = null;
            const merged = mergeList(list1, list2);

            expect(merged).toEqual(null);
        });

        test('handles the cases when one list is empty', () => {
            const list1 = null;
            const node1 = new ListNode(1);
            const node2 = new ListNode(2, node1);
            const list2 = new ListNode(3, node2);

            const merged = mergeList(list1, list2);

            expect(merged.val).toEqual(1);
            expect(merged.next).toEqual(node2);
        });
    })
})

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]