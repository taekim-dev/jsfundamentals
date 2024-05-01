const maxProfit = require('./maxProfit.js')

describe('maxProfit', () => {
    describe('standard behavior', () => {
        // test('applies to empty array', () => {
        //     const input = [];
        //     const result = maxProfit(input)

        //     expect(result).toEqual(0);
        // });

        // test('applies to an array where the prices are', () => {
        //     const input = [1, 2, 3, 4, 5, 2];
        //     const result = maxProfit(input);

        //     expect(result).toEqual(true);
        // });
        
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