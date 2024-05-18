const firstBadVersion = require('./firstBadVersion.js')

describe('First Bad Version Test', () => {
    describe('standard behavior', () => {
        test('handles when no bad version with a simple input', () => {
            const isBad = (x) => x > 4;
            const badVersion = firstBadVersion(isBad);
            const res = badVersion(3);

            expect(res).toEqual(-1);
        });

        test('handles when bad version with a simple input', () => {
            const isBad = (x) => x % 2 === 0;
            const badVersion = firstBadVersion(isBad);
            const res = badVersion(3);
            expect(res).toEqual(2);
        });

        test('handles when bad version with a complex input', () => {
            expect().toEqual();
        });
    })

    describe('edge cases', () => {
        test('description', () => {
        });
    })
})