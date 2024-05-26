const throttlePromises = require('./throttlePromises.js')

describe('throttlePromises Test', () => {
    describe('standard behavior', () => {
        test('should resolve all promises when the max limit is not exceeded', async () => {
            const funcs = [
                () => Promise.resolve(1),
                () => Promise.resolve(2),
                () => Promise.resolve(3),
            ]

            const result = await throttlePromises(funcs, 2);
            
            expect(result).toEqual([1, 2, 3]);
        });

        test('should handle concurrent promises correctly when max limit is exceeded', async () => {
            const funcs = [
                () => new Promise(res => setTimeout(() => res(1), 100)),
                () => new Promise(res => setTimeout(() => res(2), 50)),
                () => new Promise(res => setTimeout(() => res(3), 150)),
                () => new Promise(res => setTimeout(() => res(4), 200)),
            ]

            const result = await throttlePromises(funcs, 2);
            expect(result).toEqual([1, 2, 3, 4]);
        })

        test('should relay any errors that occur', async () => {
            const func = [
                () => Promise.resolve(1),
                () => Promise.reject(new Error('Test Error')),
                () => Promise.resolve(3),
            ]

            try {
                await throttlePromises(funcs, 2);
            } catch (err) {
                expect(err.message).toBe('Test Error');
            }
        })
    })

    describe('edge cases', () => {
        test('description', () => {
        });
    })
})