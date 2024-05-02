const isValid = require('./validParentheses.js')

describe('Valid Parentheses', () => {
    describe('standard behavior', () => {
        test('handles a valid array', () => {
            const input = ['[', '(', '{', '}', ')', '}' ]
            const res = isValid(input)
            expect(res).toEqual(true);
        });

        test('handles an invalid valid array', () => {
            const input = ['[', '(', '{', '}', ']', '}' ]
            const res = isValid(input)
            expect(res).toEqual(false);
        });
    })

    describe('edge cases', () => {
        test('handles an empty array', () => {
            const input = [];
            const res = isValid(input);

            expect(res).toEqual(true);
        });
        test('description', () => {
            expect().toEqual();
        });
    })
})