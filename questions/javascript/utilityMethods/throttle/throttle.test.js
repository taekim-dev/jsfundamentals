const throttle = require('./throttle.js');

describe('Throttle Test', () => {
    describe('standard behavior', () => {
        test('Allows a call after the delay', () => {
            jest.useFakeTimers();
            const mockFunction = jest.fn();
        
            const throttled = throttle(mockFunction, 2);
            throttled();
            jest.advanceTimersByTime(3);
            throttled();
        
            expect(mockFunction).toHaveBeenCalledTimes(2);
        });

        test('Allows initial and post-delay calls only', () => {
            jest.useFakeTimers();
            const mockFunction = jest.fn();
        
            const throttled = throttle(mockFunction, 2);
            throttled();
            throttled(); // Should be ignored
            throttled(); // Should be ignored
            throttled(); // Should be ignored
            jest.advanceTimersByTime(2);
            expect(mockFunction).toHaveBeenCalledTimes(1);
        
            jest.advanceTimersByTime(1);
            throttled();
            expect(mockFunction).toHaveBeenCalledTimes(2);
        });
    });

    describe('edge cases', () => {
        test('Allows calls right at the moment the delay expires', () => {
            jest.useFakeTimers();
            const mockFunction = jest.fn();
        
            const throttled = throttle(mockFunction, 2);
            throttled();
            jest.advanceTimersByTime(2);
            throttled();
            jest.advanceTimersByTime(2);
            throttled();
            jest.advanceTimersByTime(2);
            throttled();
            jest.advanceTimersByTime(1);
            expect(mockFunction).toHaveBeenCalledTimes(4);
        });
    });

    describe('leading and trailing options', () => {
        test('executes immediately with leading option and does not execute at the end of the period', () => {
            jest.useFakeTimers();
            const mockFunction = jest.fn();

            const throttled = throttle(mockFunction, 2, { leading: true, trailing: false });
            throttled(); // Should be executed immediately
            throttled(); // Should be ignored
            jest.advanceTimersByTime(2);
            throttled(); // Should be executed
            throttled(); // Should be ignored
            jest.advanceTimersByTime(2);
        
            expect(mockFunction).toHaveBeenCalledTimes(2);
        });

        test('does not execute immediately with trailing option and executes at the end of the period', () => {
            jest.useFakeTimers();
            const mockFunction = jest.fn();

            const throttled = throttle(mockFunction, 2, { leading: false, trailing: true });
            throttled(); // Should not be executed immediately
            throttled(); // Should be ignored
            jest.advanceTimersByTime(2);
            throttled(); // Should be executed
            throttled(); // Should be ignored
            jest.advanceTimersByTime(2);

            expect(mockFunction).toHaveBeenCalledTimes(2);
        });

        test('executes immediately and at the end with both leading and trailing options', () => {
            jest.useFakeTimers();
            const mockFunction = jest.fn();

            const throttled = throttle(mockFunction, 2, { leading: true, trailing: true });
            throttled(); // Should be executed immediately
            throttled(); // Should be ignored
            jest.advanceTimersByTime(2);
            throttled(); // Should be executed at the end of the period
            throttled(); // Should be ignored
            jest.advanceTimersByTime(2);

            expect(mockFunction).toHaveBeenCalledTimes(3);
        });

        test('does not execute at all with both leading and trailing options set to false', () => {
            jest.useFakeTimers();
            const mockFunction = jest.fn();

            const throttled = throttle(mockFunction, 2, { leading: false, trailing: false });
            throttled(); // Should not be executed
            throttled(); // Should not be executed
            jest.advanceTimersByTime(2);
            throttled(); // Should not be executed
            jest.advanceTimersByTime(2);

            expect(mockFunction).not.toHaveBeenCalled();
        });
    });
});
