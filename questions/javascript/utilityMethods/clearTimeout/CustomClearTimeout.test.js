const CustomClearTimeout = require('./CustomClearTimeout.js');

describe('clearTimeout Test', () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });

    describe('standard behavior', () => {
        test('clear a single setTimeout', () => {
            const func = jest.fn();
            const timerId = setTimeout(func, 1000);
            CustomClearTimeout(timerId);
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

            CustomClearTimeout(timerId1);
            CustomClearTimeout(timerId2);
            CustomClearTimeout(timerId3);
            jest.runAllTimers();

            expect(func1).not.toHaveBeenCalled();
            expect(func2).not.toHaveBeenCalled();
            expect(func3).not.toHaveBeenCalled();
        });
    });

    describe('edge cases', () => {
        test('clears specific timeout among multiple', () => {
            const func1 = jest.fn();
            const func2 = jest.fn();

            setTimeout(func1, 1000);
            const timerId2 = setTimeout(func2, 2000);
            CustomClearTimeout(timerId2);
            jest.advanceTimersByTime(1000);

            expect(func1).toHaveBeenCalled();
            expect(func2).not.toHaveBeenCalled();
        });
    });
});
