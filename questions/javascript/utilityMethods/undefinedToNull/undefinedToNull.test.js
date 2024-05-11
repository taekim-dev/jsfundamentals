const undefinedToNull = require('./undefinedToNull.js')

describe('Undefined To Null Name', () => {
    describe('standard behavior', () => {
        test('handles primitive type', () => {
            const input = undefined;
            const output = undefinedToNull(input)

            expect(output).toEqual(null);
        });

        test('returns original structure when no undefined values are present', () => {
            const input = [1, 2, 3];
            const output = undefinedToNull(input);
        
            expect(output).toEqual([1, 2, 3]);
        });        

        test('handles array type', () => {
            const input = [1, 2, undefined];
            const output = undefinedToNull(input)

            expect(output).toEqual([1, 2, null]);
        });

        test('handles complex array', () => {
            const input = [1, 2, [1, 3, [undefined, 9]]];
            const output = undefinedToNull(input);
        
            expect(output).toEqual([1, 2, [1, 3, [null, 9]]]);
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

        test('handles complex object', () => {
            const input = {
                name : "kim",
                number: "9990",
                birth: {
                    city: undefined,
                    gender: "male"
                }
                
            };
            const output = undefinedToNull(input)

            expect(output.birth.city).toEqual(null);
        });

    })

    describe('edge cases', () => {
        test('handles deeply nested objects', () => {
            const input = {level1: {level2: {level3: undefined}}};
            const output = undefinedToNull(input);
        
            expect(output.level1.level2.level3).toEqual(null);
        });

        test('handles mixed data types', () => {
            const input = [1, "test", false, undefined];
            const output = undefinedToNull(input);
        
            expect(output).toEqual([1, "test", false, null]);
        });

    })
})