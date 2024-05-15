
const collectAndSpread = (fn, ...args) => {
    const collectedArgs = args;
    return fn(...collectedArgs)
}


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
    })

    describe('edge cases', () => {
        test('description', () => {
        });
    })
})