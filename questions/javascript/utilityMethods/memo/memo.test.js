const memo = require('./memo.js')

describe('Memo (memoization) Test', () => {
    describe('standard behavior', () => {
        test('handles memoization for a simple function', () => {
            const sum = jest.fn((a, b) => a + b);
            const memoed = memo(sum);

            const res1 = memoed(3, 1)
            const res2 = memoed(3, 1)

            expect(res1).toEqual(4);
            expect(res2).toEqual(4);
            expect(sum).toHaveBeenCalledTimes(1);
        });

        test('handles memoization for a complex function', () => {
            const complexFunc = jest.fn((a, b) => a * b + Math.sqrt(a + b))

            const memoed = memo(complexFunc);

            const res1 = memoed(3, 1)
            const res2 = memoed(3, 1)

            expect(res1).toEqual(complexFunc(3, 1));
            expect(res2).toEqual(complexFunc(3, 1));
            expect(complexFunc).toHaveBeenCalledTimes(1);
        });

        test('handles memoization for functions with different hash keys', () => {
            const sum = jest.fn((a, b) => a + b);
            const memoed = memo(sum);

            const res1 = memoed(3, 1)
            const res2 = memoed(3, 1)
            const res3 = memoed(2, 2)

            expect(res1).toEqual(4);
            expect(res2).toEqual(4);
            expect(res3).toEqual(4);
            
            expect(sum).toHaveBeenCalledTimes(2);
        });
    })

    describe('edge cases', () => {
        test('description', () => {
        });
    })
})