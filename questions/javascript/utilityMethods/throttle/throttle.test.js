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

        test('Allows a single call during the delay', () => {
            jest.useFakeTimers();
            const mockFunction = jest.fn();
        
            const throttled = throttle(mockFunction, 2);
            throttled();
            throttled();
            throttled();
            throttled();
            jest.advanceTimersByTime(3);
            throttled();
        
            expect(mockFunction).toHaveBeenCalledTimes(2);
        });
    })

    describe('edge cases', () => {
        test('description', () => {
        });
    })
})