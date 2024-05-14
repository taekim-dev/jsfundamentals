const sum = require('./sum.js')

describe('Sum Test', () => {
    describe('standard behavior', () => {
        test('handles a single argument', () => {
            const sum1 = sum(1);
            const res = sum1(2);
            expect(res).toEqual(3);
        });

        test('handles chaining', () => {
            const res = sum(1)(2)(3)
            expect(res).toEqual(6);

            const res2 = sum(-1)(4)(2)
            expect(res).toEqual(5);
        });
    })

    describe('edge cases', () => {
        test('description', () => {
        });
    })
})