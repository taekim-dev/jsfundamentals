describe('Spread Operator with Function Calls', () => {
    describe('Sum with rest parameter', () => {
        test('handles ', () => {
            const sum = (...args) => args.reduce((acc, curr) => acc + curr, 0);
            expect(sum(1, 2)).toBe(3);
            expect(sum(1, 2, 3, 4, 5)).toBe(15);
            expect(sum()).toBe(0);
        });

        test('Call a function with Spread', () => {
            const sum = (a, b, c) => a + b + c;
            const args = [1, 2, 3];
            expect(sum(...args)).toBe(6);
        });

        test('function that calls another function with spread arguments', () => {
            const callWithSpread = (fn, ...args) => fn(...args);
            const sum = (a, b, c) => a + b + c;
            
            const args = [1, 2, 3];
            const res = callWithSpread(sum, ...args);
            
            expect(res).toEqual(6);
        });

        test('collecting and spreading arguments into another function', () => {
            const sum = (a, b, c) => a + b + c;
            const collectAndSpread = (fn, ...args) => {
                const collectedArgs = args; // collectedArgs is Array
                return fn(...collectedArgs);
            }
            const args = [1, 2, 3];
        
            expect(collectAndSpread(sum, ...args)).toEqual(6);
        });

        test('collecting arguments and using them directly', () => {
            const multiply = (...args) => args.reduce((acc, curr) => acc * curr, 1);

            expect(multiply(1, 2, 3)).toBe(6);
            expect(multiply(4, 5)).toBe(20);
        });

        test('spreading arguments from array into a function call', () => {
            const max = Math.max;
            const numbers = [10, 20, 30, 41, 15];
            
            expect(max(...numbers)).toBe(41);
        });

        test('combine arrays', () => {
            const array1 = [1, 2, 3];
            const array2 = [3, 4, 5];
            const combined = (args1, args2) => [...args1, ...args2];
            
            expect(combined(array1, array2)).toEqual([1, 2, 3, 3, 4, 5]);
        });

        test('spread strings', () => {
            const toArray = (args) => [...args];
            const stringInput = "hello"
            
            expect(toArray(stringInput)).toEqual(['h','e','l','l','o']);
        });

        test('add to array', () => {
            const addToArray = (arr, ...args) => [...arr, ...args];
            expect(addToArray([1, 2], 3, 4, 5)).toEqual([1, 2, 3, 4 ,5]);
        });

    })

    describe('edge cases', () => {
        test('description', () => {
        });
    })
})