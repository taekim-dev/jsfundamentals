require('./myPromise.js')

describe('Custom Promise', () => {
    describe('standard behavior', () => {
        test('resolve a valid function', async () => {
            const log = () => "hello";
            const res = await new MyPromise((resolve) => {
                resolve(log());
            });

            expect(res).toEqual("hello");
        });

        test('resolve a valid function with timeout', async () => {
            const log = () => {
                return new myPromise((resolve) => {
                    setTimeout(() => {
                        resolve("hello");
                    }, 1000)
                })
            }

            const res = await log();
            expect(res).toEqual("hello");
        });

        test('reject a valid function', () => {
            expect().toEqual();
        });

        test('handles chaining one statement', () => {
            expect().toEqual();
        });

        test('handles chaining multiple statements', () => {
            expect().toEqual();
        });
    })

    describe('edge cases', () => {
        test('description', () => {
        });
    })
})