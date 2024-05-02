const isValid = require('./validParentheses.js')

describe('Valid Parentheses', () => {
    describe('standard behavior', () => {
        test('handles a valid string', () => {
            const input = "()[]{}"
            const res = isValid(input)
            expect(res).toEqual(true);
        });

        test('handles an invalid string', () => {
            const input = "()[]{)"
            const res = isValid(input)
            expect(res).toEqual(false);
        });
    })

    describe('edge cases', () => {
        test('handles an empty string', () => {
            const input = "";
            const res = isValid(input);

            expect(res).toEqual(true);
        });
    })
})