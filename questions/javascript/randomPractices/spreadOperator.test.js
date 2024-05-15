
const sum = (...args) => args.reduce((acc, curr) => acc + curr, 0);
const callWithSpread = (fn, ...args) => fn(...args);
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

        test('description', () => {
            
            expect().toEqual();
        });

        test('description', () => {
            
            expect().toEqual();
        });
    })

    describe('edge cases', () => {
        test('description', () => {
        });
    })
})