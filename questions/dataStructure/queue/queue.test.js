import Queue from "./queue";

describe('Queue Test', () => {
    describe('standard behavior', () => {
        test('queue is empty', () => {
            const queue = new Queue();
            const res = queue.isEmpty();

            expect(res).toEqual(true);
        });
        test('enqueue()', () => {
            const q = new Queue();
            expect(q.enqueue(100)).toBe(1);
            expect(q.enqueue(200)).toBe(2);
        });

        test('Add elements into the Queue', () => {
            const queue = new Queue();
            queue.enqueue(1);
            queue.enqueue(2);
            queue.enqueue(3);
            queue.enqueue(4);

            const res = queue.length();

            expect(res).toEqual(4);
        });

        test('Remove elements from the Queue', () => {
            const queue = new Queue();
            queue.enqueue(1);
            queue.enqueue(2);
            queue.enqueue(3);
            queue.enqueue(4);

            queue.dequeue()
            queue.dequeue()
            
            const res = queue.length();
            expect(res).toEqual(2);
        });

        test('Check front and back of the queue', () => {
            const queue = new Queue();
            queue.enqueue(3);
            queue.enqueue(4);
            queue.enqueue(5);

            const front = queue.front();
            const back = queue.back();
            expect(front).toEqual(3);
            expect(back).toEqual(5);
        });
    })

    describe('edge cases', () => {
        test('description', () => {
        });
    })
})