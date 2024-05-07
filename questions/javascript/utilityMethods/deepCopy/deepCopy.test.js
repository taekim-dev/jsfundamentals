const deepCopy = require('./deepCopy.js')

describe('Deep Copy', () => {
    describe('standard behavior', () => {
        test('handles simple array copy', () => {
            const original = [1, 2, 3];
            const copied = deepCopy(original);
            expect(original).toEqual(copied);
        });

        test('handles simple object copy', () => {
            const original = { name : "james" }
            const copied = deepCopy(original);
            expect(original).toEqual(copied);
        });

        test('handles nested object copy', () => {
            const original = { 
                name : "james",
                address : {
                    zipcode: 11111
                }
            }
            const copied = deepCopy(original);
            expect(original).toEqual(copied);
        });

        test('handles array of objects copy', () => {
            const original = [{ name: "Alice" }, { name: "Bob" }]
            const copied = deepCopy(original);
            expect(original).toEqual(copied);
        });
    })

    describe('edge cases', () => {
        test('handle a null value in objects', () => {
            const original = { name: "james", spouse: null }
            const copied = deepCopy(original);
            expect(original).toEqual(copied);
        });

        test('handle a undefined value in objects', () => {
            const original = { name: "james", middleName: undefined }
            const copied = deepCopy(original);
            expect(original).toEqual(copied);
        });

        // Function, Date, Cycle...
    })
})