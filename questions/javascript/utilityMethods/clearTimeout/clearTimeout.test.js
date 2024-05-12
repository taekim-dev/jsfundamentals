const clearTimeout = require('./clearTimeout.js')

describe('clearTimeout Test', () => {
    describe('standard behavior', () => {
        test('clear a single setTimeout', () => {
            const func = () => {console.log('hello')};
            setTimeout(func, 1000)
            clearTimeout();

            expect(func).toHaveBeenCalledTimes(0);
        });

        test('clear multiple setTimeouts', () => {
            const func1 = () => {console.log('hello1')};
            const func2 = () => {console.log('hello2')};
            const func3 = () => {console.log('hello3')};


            setTimeout(func1, 1000)
            setTimeout(func2, 2000)
            setTimeout(func3, 3000)

            clearTimeout();

            expect(func1).toHaveBeenCalledTimes(0);
            expect(func1).toHaveBeenCalledTimes(0);
            expect(func1).toHaveBeenCalledTimes(0);

        });
    })

    describe('edge cases', () => {
        test('description', () => {
        });
    })
})