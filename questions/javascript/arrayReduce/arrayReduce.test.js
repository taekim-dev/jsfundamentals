const arrayReduce = require('./arrayReduce.js')

describe('arrayReduce', () => {
    describe('standard behavior', () => {
        test('applies a function to every element', () => {
            const input = [1, 2, 3];
            const result = arrayReduce(input, (acc, curr) => acc + curr);
            expect(result).toEqual([1, 3, 6]);
        })

        // test('applies callback with element and index passed to the callback', () => {
        //     const input = [1, 2, 3];
        //     const result = arrayReduce(input, (x, index) => x * 2 + index);
        //     const expected = ([ 1 * 2 + 0, 2 * 2 + 1, 3 * 2 + 2]);
        //     expect(result).toEqual(expected);
        // })

        // test('applies callback with element, index, and original array passed to the callback', () => {
        //     const input = [1, 2, 3];
        //     const result = arrayReduce(input, (x, index, array) => x * 2 + index + array[index]);
        //     const expected = ([ 1 * 2 + 0 + input[0], 2 * 2 + 1 + input[1], 3 * 2 + 2 + input[2]]);
        //     expect(result).toEqual(expected);            
        // })
    })

    describe('edge cases', () => {
        test('handles an empty array', () => {
            const input = [];
            const result = arrayReduce(input, (acc, curr) => acc + curr);
            expect(result).toEqual([]);
        })
    })
})