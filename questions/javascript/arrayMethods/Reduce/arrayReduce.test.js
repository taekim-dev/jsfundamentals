const arrayReduce = require('./arrayReduce.js')

describe('arrayReduce', () => {
    describe('standard behavior', () => {
        test('applies a function to every element', () => {
            const input = [1, 2, 3];
            const result = arrayReduce(input, (acc, curr) => acc + curr);
            expect(result).toEqual([1, 3, 6]);
        })

        test('applies a function with initial element', () => {
            const input = [1, 2, 3];
            const initialValue = 2;
            const result = arrayReduce(input, (acc, curr) => acc + curr, initialValue);
            expect(result).toEqual([3, 5, 8]);
        })
    })

    describe('edge cases', () => {
        test('handles an empty array', () => {
            const input = [];
            const result = arrayReduce(input, (acc, curr) => acc + curr);
            expect(result).toEqual([]);
        })
    })
})