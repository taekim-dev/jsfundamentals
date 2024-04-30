const containDuplicate = require('./containDuplicate.js')

describe('containDuplicate', () => {
    describe('standard behavior', () => {
        test('applies to empty array', () => {
            const input = [];
            const result = containDuplicate(input)

            expect(result).toEqual(false);
        });

        test('applies to an array with a single duplicate value', () => {
            const input = [1, 2, 3, 4, 5, 2];
            const result = containDuplicate(input);

            expect(result).toEqual(true);
        });
        
    })

    describe('edge case', () => {
        test('apply to a large array with no duplicate value', () => {
            const input = [];
            for(let i = 0; i < 1000; i++){
                input[i] = i
            }
            const result = containDuplicate(input);
            expect(result).toEqual(false);
        });

        test('apply to a large array with one duplicate value', () => {
            const input = [];
            for(let i = 0; i < 1000; i++){
                input[i] = i
            }
            input.push(0);

            const result = containDuplicate(input);
            expect(result).toEqual(true);
        });
    })
})