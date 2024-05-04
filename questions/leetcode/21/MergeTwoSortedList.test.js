const { mergeList, ListNode } = require('./MergeTwoSortedList.js')

describe('Merge Two Sorted List', () => {
    describe('standard behavior', () => {
        test('description', () => {

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