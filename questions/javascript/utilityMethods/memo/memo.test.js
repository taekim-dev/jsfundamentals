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

            const expected = complexFunc(3, 1);
            complexFunc.mockClear();

            const res1 = memoed(3, 1)
            const res2 = memoed(3, 1)

            expect(res1).toEqual(expected);
            expect(res2).toEqual(expected);
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
        test('handles memoization with no arguments', () => {
            const noArgs = jest.fn(() => 42);
            const memoed = memo(noArgs);

            const res1 = memoed();
            const res2 = memoed();

            expect(res1).toEqual(42);
            expect(res2).toEqual(42);
            expect(noArgs).toHaveBeenCalledTimes(1);
        });
    })
})