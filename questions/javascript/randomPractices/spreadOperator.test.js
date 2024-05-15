
const sum = (...args) => args.reduce((acc, curr) => acc + curr, 0);
const callWithSpread = (fn, ...args) => fn(...args);
const collectAndSpread = (fn, ...args) => {
    const collectedArgs = args;
    return fn(...collectedArgs)
}


describe('Function Name', () => {
    describe('standard behavior', () => {
        test('description', () => {
            expect().toEqual();
        });
    })

    describe('edge cases', () => {
        test('description', () => {
        });
    })
})