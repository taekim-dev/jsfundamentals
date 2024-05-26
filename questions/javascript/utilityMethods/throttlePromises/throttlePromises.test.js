const throttlePromises = require('./throttlePromises.js');

describe('throttlePromises Test', () => {
    describe('standard behavior', () => {
        test('should resolve all promises when the max limit is not exceeded', async () => {
            const funcs = [
                () => Promise.resolve(1),
                () => Promise.resolve(2),
                () => Promise.resolve(3),
            ];

            const result = await throttlePromises(funcs, 2);
            expect(result).toEqual([1, 2, 3]);
        });

        test('should handle concurrent promises correctly when max limit is exceeded', async () => {
            const funcs = [
                () => new Promise(res => setTimeout(() => res(1), 100)),
                () => new Promise(res => setTimeout(() => res(2), 50)),
                () => new Promise(res => setTimeout(() => res(3), 150)),
                () => new Promise(res => setTimeout(() => res(4), 200)),
            ];

            const result = await throttlePromises(funcs, 2);
            expect(result).toEqual([1, 2, 3, 4]);
        });

        test('should relay any errors that occur', async () => {
            const funcs = [
                () => Promise.resolve(1),
                () => Promise.reject(new Error('Test Error')),
                () => Promise.resolve(3),
            ];

            try {
                await throttlePromises(funcs, 2);
            } catch (err) {
                expect(err.message).toBe('Test Error');
            }
        });
    });

    describe('edge cases', () => {
        test('should handle an empty array of functions', async () => {
            const funcs = [];
            const result = await throttlePromises(funcs, 2);
            expect(result).toEqual([]);
        });

        test('should handle a max limit of 1', async () => {
            const funcs = [
                () => new Promise(res => setTimeout(() => res(1), 100)),
                () => new Promise(res => setTimeout(() => res(2), 50)),
                () => new Promise(res => setTimeout(() => res(3), 150)), 
            ];

            const result = await throttlePromises(funcs, 1);
            expect(result).toEqual([1, 2, 3]);
        });

        test('should handle a max limit greater than the number of functions', async () => {
            const funcs = [
                () => Promise.resolve(1),
                () => Promise.resolve(2),
            ];

            const result = await throttlePromises(funcs, 4);
            expect(result).toEqual([1, 2]);
        });
    });

    describe('concurrency limit', () => {
        test('should not exceed the max limit of concurrently running promises', async () => {
            let currentlyRunning = 0;
            const maxRunning = [];

            const funcs = Array.from({ length: 10 }, (_, i) => () => 
                new Promise((resolve) => {
                    currentlyRunning++;
                    maxRunning.push(currentlyRunning);
                    setTimeout(() => {
                        currentlyRunning--;
                        resolve(i);
                    }, 50);
                })  
            );

            const max = 3;
            await throttlePromises(funcs, max);

            /* maxRunning array
            [
                1, 2, 3, // Initial three promises start
                3, 3, 3, // First three promises resolved, next three started
                3, 3, 3, // Next three resolved, last three started
                2, 2,    // Final promises resolving
                1, 1, 0  // All promises resolved
            ]
            */

            expect(Math.max(...maxRunning)).toBeLessThanOrEqual(max);
        });
    });
})