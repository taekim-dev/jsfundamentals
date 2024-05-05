const { mergeList, ListNode } = require('./MergeTwoSortedList.js')

function createLinkedList(values) {
    if (!values || values.length === 0) return null;
    let head = new ListNode(values[0]);
    let current = head;
    for (let i = 1; i < values.length; i++) {
        current.next = new ListNode(values[i]);
        current = current.next;
    }
    return head;
}

function areEqual(list1, list2) {
    let currNode1 = list1;
    let currNode2 = list2;

    while (currNode1 !== null && currNode2 !== null){
        if (currNode1.val !== currNode2.val) {
            return false;
        }

        currNode1 = currNode1.next;
        currNode2 = currNode2.next;
    }

    return currNode1 === null && currNode2 === null;
}

describe('Merge Two Sorted List', () => {
    describe('standard behavior', () => {
        test('handle two sorted lists', () => {
            const list1 = createLinkedList([1, 3, 5]);
            const list2 = createLinkedList([1, 4, 6]);
            const merged = mergeList(list1, list2)
            const expected = createLinkedList([1, 1, 3, 4, 5, 6]);

            expect(areEqual(merged, expected)).toBe(true);
        });

        test('handle two large sorted linked lists', () => {
            const values1 = [];
            for(let i = 0; i < 100; i++){
                values1.push(i);
            }
            const values2 = [];
            for(let i = 100; i < 200; i++){
                values2.push(i);
            }

            const list1 = createLinkedList(values1);
            const list2 = createLinkedList(values2);
            const mergedList = mergeList(list1, list2);

            const expected = [];
            for(let i = 0; i < 200; i++){
                expected.push(i);
            }
            const expectedList = createLinkedList(expected);

            expect(areEqual(mergedList, expectedList)).toBe(true);
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
            const list2 = createLinkedList([1, 2, 3])
            const merged = mergeList(list1, list2);
            const expected = createLinkedList([1, 2, 3]);

            expect(merged.val).toEqual(1);
            expect(areEqual(merged, expected)).toBe(true);
        });
    })
})

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]