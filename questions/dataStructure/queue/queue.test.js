import Queue from "./queue";

describe('Queue Test', () => {
    describe('standard behavior', () => {
        test('description', () => {

            expect().toEqual();
        });
    })

    describe('edge cases', () => {
        test('description', () => {
        });
    })
})




const queue = new Queue();
queue.isEmpty(); // true
queue.enqueue(1);
queue.enqueue(2);
queue.length(); // 2
queue.enqueue(3);
queue.front(); // 1
queue.back(); // 3
queue.dequeue(); // 1
queue.isEmpty(); // false