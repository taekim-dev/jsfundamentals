const firstBadVersion = require('./firstBadVersion.js')

describe('First Bad Version Test', () => {
    describe('standard behavior', () => {
        test('handles when no bad version with a simple input', () => {
            const isBad = (x) => x > 4;
            const badVersion = firstBadVersion(isBad);
            const res = badVersion(3);

            expect(res).toEqual(-1);
        });

        test('handles a bad version with a small input', () => {
            const isBad = (x) => x % 2 === 0;
            const badVersion = firstBadVersion(isBad);
            const res = badVersion(3);
            expect(res).toEqual(2);
        });

        test('handles a bad version with a large input', () => {
            const isBad = (x) => x > 10000;
            const badVersion = firstBadVersion(isBad);
            const res = badVersion(20000);
            expect(res).toEqual(10001);
        });

        test('handles a bad version with a complex isBad function', () => {
            const isBad = (x) => x > 10000 && x % 7 === 2 && x % 5 === 0;
            const badVersion = firstBadVersion(isBad);
            const res = badVersion(20000);
            expect(res).toEqual(10005);
        });
    })

})