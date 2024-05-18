const firstBadVersion = require('./firstBadVersion.js')

describe('First Bad Version Test', () => {
    describe('standard behavior', () => {
        test('handles when no bad version with a simple input', () => {
            const isBad = (x) => x / 2 === 0;
            const findOddNumbers = firstBadVersion(isBad)
            const input = 3;
            const res = findOddNumbers(input);

            expect(res).toEqual(-1);
        });

        test('handles when no bad with a complex input', () => {
            const isBad = (x) => x / 2 === 0;
            const findOddNumbers = firstBadVersion(isBad)
            const input = [1, 3, 5, 7];
            input.forEach(num => {
                const res = findOddNumbers(num)
                expect(res).toEqual(-1);
            })
        });

        test('handles when bad version with a simple input', () => {
            expect().toEqual();
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