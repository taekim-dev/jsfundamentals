const debounce = require('./debounce.js')

describe('Debounce Funtionality', () => {
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
    })

    describe('edge cases', () => {
        test('description', () => {
        });
    })
})