const deepCopy = require('./deepCopy.js')

describe('Deep Copy', () => {
    describe('standard behavior', () => {
        test('handles primitive types copy', () => {
            const originalNumber = 3;
            const copiedNumber = deepCopy(originalNumber);
            expect(copiedNumber).toEqual(originalNumber);

            const originalString = "hello";
            const copiedString = deepCopy(originalString);
            expect(copiedString).toEqual(originalString);

            const originalBoolean = true;
            const copiedBoolean = deepCopy(originalBoolean);
            expect(copiedBoolean).toEqual(originalBoolean);
        });

        test('handles simple array copy', () => {
            const original = [1, 2, 3];
            const copied = deepCopy(original);
            expect(copied).toEqual(original);
        });

        test('handles simple object copy', () => {
            const original = { name : "james" }
            const copied = deepCopy(original);
            expect(copied).toEqual(original);
        });

        test('handles nested object copy', () => {
            const original = { 
                name : "james",
                address : {
                    zipcode: 11111
                }
            }
            const copied = deepCopy(original);
            expect(copied).toEqual(original);
        });

        test('handles array of objects copy', () => {
            const original = [{ name: "Alice" }, { name: "Bob" }]
            const copied = deepCopy(original);
            expect(copied).toEqual(original);
        });
    })

    describe('edge cases', () => {
        test('handle a null value in objects', () => {
            const original = { name: "james", spouse: null }
            const copied = deepCopy(original);
            expect(copied).toEqual(original);
        });

        test('handle a undefined value in objects', () => {
            const original = { name: "james", middleName: undefined }
            const copied = deepCopy(original);
            expect(copied).toEqual(original);
        });

        // Function, Date, Cycle...
    })
})