const arrayFilter = require('./arrayFilter.js')

describe('arrayFilter', () => {
    describe('standard behavior', () => {
        test('applies a function to every element', () => {
            const input = [1, 2, 3, 4, 5, 6];
            const result = arrayFilter(input, x => x % 2 === 1);
            expect(result).toEqual([1, 3, 5]);
        });

        test('applies a function to every element using thisArg to provide context', () => {
            const input = [1, 2, 3, 4, 5, 6];
            const thresholds = { minValue : 2}
            const result = arrayFilter(input, function(x) {
                return (x % 2 === 1 && x > this.minValue)
            }, thresholds)
            expect(result).toEqual([3, 5])
        });
        
    })

    describe('edge cases', () => {
        test('handles an empty array', () => {
            const input = [];
            const result = arrayFilter(input, x => x % 2 === 0);
            expect(result).toEqual([]);
        });
    })
})