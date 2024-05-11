const undefinedToNull = require('./undefinedToNull.js')

describe('Undefined To Null Name', () => {
    describe('standard behavior', () => {
        test('handles primitive type', () => {
            const input = undefined;
            const output = undefinedToNull(input)

            expect(output).toEqual(null);
        });

        test('handles array type', () => {
            const input = [1, 2, undefined];
            const output = undefinedToNull(input)

            expect(output).toEqual([1, 2, null]);
        });

        test('handles object type', () => {
            const input = {
                name : "kim",
                number: "9990",
                gender: undefined
            };
            const output = undefinedToNull(input)

            expect(output.gender).toEqual(null);
        });
    })

    describe('edge cases', () => {
        test('description', () => {
        });
    })
})