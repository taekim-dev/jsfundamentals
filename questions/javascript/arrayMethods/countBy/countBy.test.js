import countBy from "./countBy.js";

describe('countBy', () => {
    describe('standard behavior', () => {
        test('handles an array input', () => {
            const input = [6.2, 4.3, 6.9];
            const res = countBy(input, Math.floor); 
            expect(res['6']).toEqual(2);
            expect(res['4']).toEqual(1);
            expect(res['5']).toBeUndefined();
        });

        test('handles an object input', () => {
            const input = [{ n: 3 }, { n: 5 }, { n: 3 }];
            const res = countBy(input, (o) => o.n); 

            expect(res['3']).toEqual(2);
            expect(res['5']).toEqual(1);
        });
    });

    describe('edge cases', () => {
        test('handles an empty input', () => {
            const input = [];
            const res = countBy(input, () => {});
            expect(res).toEqual({});
        });

        test('handles objects with undefined properties', () => {
            const input = [{ n: 1 }, { n: 2 }];
            const res = countBy(input, (o) => o.m);
            expect(res['undefined']).toEqual(2);
        });
    });
});
