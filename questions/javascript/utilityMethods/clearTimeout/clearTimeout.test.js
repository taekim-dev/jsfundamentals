const clearTimeout = require('./clearTimeout.js')

describe('clearTimeout Test', () => {
    describe('standard behavior', () => {
        test('clear a single setTimeout', () => {
            const func = jest.fn();
            const timerId = setTimeout(func, 1000)
            clearTimeout(timerId);
            jest.runAllTimers();

            expect(func).not.toHaveBeenCalled();
        });

        test('clear multiple setTimeouts', () => {
            const func1 = jest.fn();
            const func2 = jest.fn();
            const func3 = jest.fn();

            const timerId1 = setTimeout(func1, 1000);
            const timerId2 = setTimeout(func2, 2000);
            const timerId3 = setTimeout(func3, 3000);

            clearTimeout(timerId1);
            clearTimeout(timerId2);
            clearTimeout(timerId3);
            jest.runAllTimers();

            expect(func1).not.toHaveBeenCalled();
            expect(func2).not.toHaveBeenCalled();
            expect(func3).not.toHaveBeenCalled();

        });
    })

    describe('edge cases', () => {
        const func1 = jest.fn();
        const func2 = jest.fn();

        setTimeout(func1, 1000);
        const timerId2 = setTimeout(func2, 2000);
        clearTimeout(timerId2);
        jest.advanceTimersByTime(1000);

        expect(func1).toHaveBeenCalled();
        expect(func2).not.toHaveBeenCalled()
    })
})