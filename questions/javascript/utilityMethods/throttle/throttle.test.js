const throttle = require('./throttle.js')

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
    })

    describe('edge cases', () => {
        test('description', () => {
        });
    })
})