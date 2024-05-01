require('./arraySlice.js')

describe('Function Name', () => {
    describe('standard behavior', () => {
        test('handles an array with elements', () => {
            const array = [1, 2, 3, 4, 5];
            const res = array.arraySlice(2);
            expect(res).toEqual([3, 4, 5]);
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