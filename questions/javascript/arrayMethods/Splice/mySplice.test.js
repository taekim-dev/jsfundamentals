require('./mySplice.js')

describe('Custom Splice', () => {
    describe('standard behavior', () => {
        test('handles when no argument is given', () => {
            const array = [1, 2, 3];
            const res = array.mySplice();
            expect(res).toEqual([]);
            expect(array).toEqual([1, 2, 3])
        });

        test('handles when positive start index is given', () => {
            const array = [1, 2, 3];
            const res = array.mySplice(2, 1);
            expect(res).toEqual([3]);
            expect(array).toEqual([1, 2]);
        });

        test('handles when start index is nagative', () => {
            const array = [1, 2, 3, 4];
            const res = array.mySplice(-2, 2);
            expect(res).toEqual([3, 4]);
            expect(array).toEqual([1, 2]);
        });

        test('handles when no delete count is given', () => {
            const array = [1, 2, 4];
            const res = array.mySplice(2, 0, 3);
            expect(res).toEqual([]);
            expect(array).toEqual([1, 2, 3, 4]);
        });
    })

    // describe('edge cases', () => {
    //     test('description', () => {
    //     });
    // })
})