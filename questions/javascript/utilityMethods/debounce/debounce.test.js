const debounce = require('./debounce.js');

describe('Debounce Functionality', () => {
    describe('standard behavior', () => {
        test('handles no delay', done => {
            jest.useFakeTimers();
            const mockFunction = jest.fn();

            const debounced = debounce(mockFunction, 0);
            debounced();
            debounced();

            jest.runAllTimers();

            expect(mockFunction).toHaveBeenCalledTimes(1);
            done();
        });

        test('handles a short delay', done => {
            jest.useFakeTimers();
            const mockFunction = jest.fn();

            const debounced = debounce(mockFunction, 1);
            debounced();
            debounced();
            debounced();
            debounced();

            jest.runAllTimers();

            expect(mockFunction).toHaveBeenCalledTimes(1);
            done();
        });

        test('only the last of three calls is executed after 1000ms delay', () => {
            jest.useFakeTimers();
            const mockFunction = jest.fn();
            const debouncedFunction = debounce(mockFunction, 1000);

            debouncedFunction();
            debouncedFunction();
            debouncedFunction();

            // Fast-forward time by 1000ms
            jest.advanceTimersByTime(1000);

            expect(mockFunction).toHaveBeenCalledTimes(1);
            jest.clearAllTimers();
        });
    });

    describe('leading and trailing behavior', () => {
        test('executes immediately with leading option', () => {
            jest.useFakeTimers();
            const mockFunction = jest.fn();

            const debounced = debounce(mockFunction, 1000, { leading: true, trailing: false });
            debounced();
            debounced();
            debounced();

            expect(mockFunction).toHaveBeenCalledTimes(1);

            // Fast-forward time to ensure trailing does not call
            jest.advanceTimersByTime(1000);
            expect(mockFunction).toHaveBeenCalledTimes(1);
            jest.clearAllTimers();
        });

        test('executes immediately and at the end with both leading and trailing option', () => {
            jest.useFakeTimers();
            const mockFunction = jest.fn();

            const debounced = debounce(mockFunction, 1000, { leading: true, trailing: true });
            debounced();
            debounced();
            debounced();

            expect(mockFunction).toHaveBeenCalledTimes(1);

            // Fast-forward time to ensure trailing calls
            jest.advanceTimersByTime(1000);
            expect(mockFunction).toHaveBeenCalledTimes(2);
            jest.clearAllTimers();
        });

        test('executes only at the end with trailing option', () => {
            jest.useFakeTimers();
            const mockFunction = jest.fn();

            const debounced = debounce(mockFunction, 1000, { leading: false, trailing: true });
            debounced();
            debounced();
            debounced();

            expect(mockFunction).not.toHaveBeenCalled();

            // Fast-forward time to ensure trailing calls
            jest.advanceTimersByTime(1000);
            expect(mockFunction).toHaveBeenCalledTimes(1);
            jest.clearAllTimers();
        });
    });

    describe('edge cases', () => {
        test('does not execute if called once and leading is false', () => {
            jest.useFakeTimers();
            const mockFunction = jest.fn();

            const debounced = debounce(mockFunction, 1000, { leading: false, trailing: false });
            debounced();

            // Fast-forward time to ensure trailing does not call
            jest.advanceTimersByTime(1000);
            expect(mockFunction).not.toHaveBeenCalled();
            jest.clearAllTimers();
        });

        test('executes twice if called twice with sufficient delay between calls', () => {
            jest.useFakeTimers();
            const mockFunction = jest.fn();

            const debounced = debounce(mockFunction, 1000);
            debounced();

            // Fast-forward time just before the delay
            jest.advanceTimersByTime(500);
            debounced();

            // Fast-forward time past the delay
            jest.advanceTimersByTime(1000);
            expect(mockFunction).toHaveBeenCalledTimes(2);
            jest.clearAllTimers();
        });
    });
});
