const maxProfit = require('./maxProfit.js')

describe('maxProfit', () => {
    describe('standard behavior', () => {
        test('applies to a stock that the prices changes', () => {
            const input = [3, 1, 5, 9, 2];
            const result = maxProfit(input)

            expect(result).toEqual(8);
        });

        test('applies to a stock that the price decreases', () => {
            const input = [5, 4, 3, 2, 1];
            const result = maxProfit(input);

            expect(result).toEqual(0);
        });
    })

    describe('edge case', () => {
        test('applies to empty array', () => {
            const input = [];
            const result = maxProfit(input)

            expect(result).toEqual(0);
        });

        test('applies to the stocks where price do not change', () => {
            const input = new Array(1000).fill(2);
            const result = maxProfit(input)

            expect(result).toEqual(0);
        });
    })
})