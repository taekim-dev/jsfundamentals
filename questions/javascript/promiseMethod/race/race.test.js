const race = require('./race.js')

describe('Promise Race Test', () => {
    describe('standard behavior', () => {
        test('handles a single promise', async () => {
            const input = [];
            const promise = new Promise((resolve, reject) => {
                resolve('successful');
            })
            input.push(promise);
            const res = race(input);

            const output = await res;
            expect(output).toEqual('successful');
            
        });

        test('handles multiple promises with first resolved promise', async () => {
            const input = [];
            const promise1 = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve('first');
                }, 1000);
            });
            const promise2 = new Promise((resolve, reject) => {
                setTimeout(() => {
                    reject('second');
                }, 2000);
            });
            const promise3 = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve('third');
                }, 3000);
            });
        
            input.push(promise1, promise2, promise3);
            const res = race(input);
        
            const output = await res;
            expect(output).toEqual('first');
        });

        test('handles multiple promises with first rejected promise', async () => {
            const input = [];
            const promise1 = new Promise((resolve) => {
                setTimeout(() => {
                    resolve('first');
                }, 3000);
            });
            const promise2 = new Promise((_, reject) => {
                setTimeout(() => {
                    reject('second');
                }, 1000);
            });
            const promise3 = new Promise((resolve) => {
                setTimeout(() => {
                    resolve('third');
                }, 2000);
            });
        
            input.push(promise1, promise2, promise3);
            const res = race(input);
        
            await expect(res).rejects.toEqual('second');
        });
    })

    describe('edge cases', () => {
        test('handles empty input', async () => {
            const input = [];
            const res = race(input);
            const output = await res;

            expect(output).toEqual(null)
        });
    })
})