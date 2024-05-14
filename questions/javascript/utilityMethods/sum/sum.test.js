const sum = require('./sum.js')

describe('Sum Test', () => {
    describe('standard behavior', () => {
        test('handles a single argument', () => {
            const sum1 = sum(1);
            const res = sum1(2)();
            expect(res).toEqual(3);
        });

        test('handles chaining', () => {
            const res = sum(1)(2)(3)()
            expect(res).toEqual(6);

            const res2 = sum(-1)(4)(2)()
            expect(res2).toEqual(5);
        });

        test('handles single argument and comparison', () => {
            const sum1 = sum(1);
            expect(sum1(2) == 3).toBe(true);
            expect(sum1(3) == 4).toBe(true);
        });
        
        test('handles multiple chained arguments and comparison', () => {
            expect(sum(1)(2)(3) == 6).toBe(true);
            expect(sum(5)(-1)(2) == 6).toBe(true);
        });
    })

    describe('edge cases', () => {
        test('description', () => {
        });
    })
})