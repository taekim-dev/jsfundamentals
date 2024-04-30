const containDuplicate = require('./containDuplicate.js')

describe('containDuplicate', () => {
    describe('standard behavior', () => {
        test('applies to empty array', () => {
            const input = [];
            const result = containDuplicate(input)

            expect(result).toEqual(false);
        });

        test('applies to an array with a single duplicate value', () => {

        });
        
    })

    describe('edge case', () => {
        test('apply to a large array with a single duplicate value', () => {

        });
    })
})