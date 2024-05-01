require('./arraySlice.js')

describe('Function Name', () => {
    describe('standard behavior', () => {
        test('handles an array with elements with a single argument', () => {
            const array = [1, 2, 3, 4, 5];
            const res = array.arraySlice(2);
            expect(res).toEqual([3, 4, 5]);
        });

        test('handles an array with elements with two arguments', () => {
            const array = [1, 2, 3, 4, 5];
            const res = array.arraySlice(2, 4);
            expect(res).toEqual([3, 4]);
        });

        test('handles an array with elements with two arguments with negative index', () => {
            const array = [1, 2, 3, 4, 5];
            const res = array.arraySlice(2, -1);
            expect(res).toEqual([3, 4]);
        });
    })

    describe('edge cases', () => {
        test('handles an emtpy array', () => {
            const array = [];
            const res = array.arraySlice(2);
            expect(res).toEqual([]);
        });
    })
})