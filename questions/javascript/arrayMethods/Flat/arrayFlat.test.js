const arrayFlat = require('./arrayFlat.js')

describe('Function Name', () => {
    describe('standard behavior', () => {
        test('flats an array when no argument is given', () => {
            const arr = [1, 2, [3, 4]];
            const res = arr.arrayFlat();
            expect(res).toEqual([1, 2, 3, 4]);
        });

        test('flats an array when depth is given', () => {
            const arr = [1, 2, [3, [4], 5]];
            const res = arr.arrayFlat();
            expect(res).toEqual([1, 2, 3, [4], 5]);
        });
    })

    describe('edge cases', () => {
        test('handles an empty array', () => {
            const arr = [];
            const res = arr.arrayFlat();
            expect(res).toEqual([]);
        });

        test('fully flats a complex array', () => {
            const arr = [[1, 2], [3, 4], [5, 6, [7, [8]]]];
            const res = arr.arrayFlat(Infinity);
            expect(res).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
        });

        test('original array has no impact from the flat call', () => {
            const origin = [1, 2, [3]];
            const flattened = origin.arrayFlat();
            flattened.push(4);
            expect(origin).toEqual([1, 2, [3]]);
            expect(flattened).toEqual([1, 2, 3, 4]);            
        });
    })
})