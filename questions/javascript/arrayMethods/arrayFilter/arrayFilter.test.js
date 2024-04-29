const arrayFilter = require('./arrayFilter.js')

describe('arrayFilter', () => {
    describe('standard behavior', () => {
        test('applies a function to every element', () => {
            const input = [1, 2, 3, 4, 5, 6];
            const result = arrayFilter(input, x => x % 2 === 1);
            expect(result).toEqual([1, 3, 5]);
        })

        // test('applies a function with this argument', () => {
        //     const input = [1, 2, 3];
        //     const initialValue = 2;
        //     const result = arrayFilter(input, (acc, curr) => acc + curr, initialValue);
        //     expect(result).toEqual([3, 5, 8]);
        // })
    })

    describe('edge cases', () => {
        test('handles an empty array', () => {
            const input = [];
            const result = arrayFilter(input, x => x % 2 === 0);
            expect(result).toEqual([]);
        })
    })
})