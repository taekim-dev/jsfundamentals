const any = require('./any.js')

describe('Promise any Test', () => {
    describe('standard behavior', () => {
        test('handles a single promise resolved', () => {
            const promise = new Promise((resolve) => {
                resolve("Resolve Immediately");
            });
            const res = any([promise]);
            return res.then(val => {
                expect(val).toEqual("Resolve Immediately");
            })
        });

        test('handles a single promise rejected', () => {
            const promise = Promise.reject(0);
            const res = any([promise]);

            return res.catch(error => {
                expect(error).toBeInstanceOf(AggregateError);
                expect(error.errors).toEqual([0]);
            });
        });

        test('handles mutilple promises resolved synchrounously', () => {
            const promise1 = Promise.resolve(1);
            const promise2 = Promise.resolve(2);
            const promise3 = Promise.resolve(3);

            const res = any([promise1, promise2, promise3]);
            return res.then(value => {
                expect(value).toEqual(1);
            })
        });

        test('handles mutilple promises resolved asynchronously', () => {
            const promise1 = new Promise((resolve) => {
                setTimeout(resolve, 200, "first")
            })
            const promise2 = new Promise((resolve) => setTimeout(resolve, 100, "second"));
            const promise3 = new Promise((resolve) => setTimeout(resolve, 300, "third"));

            const res = any([promise1, promise2, promise3]);
            return res.then(value => {
                expect(value).toEqual("second");
            })
        });

        test('handles all promises failed', () => {
            const promise1 = Promise.reject(1);
            const promise2 = Promise.reject(2);
            const promise3 = Promise.reject(3);

            const res = any([promise1, promise2, promise3]);

            return res.catch(error => {
                expect(error).toBeInstanceOf(AggregateError);
                expect(error.errors).toEqual([1, 2, 3]);
            });
        });
    })

    describe('edge cases', () => {
        test('reject when no iterable passed', () => {
            const res = any([]);
            return res.catch(error => {
                expect(error).toBeInstanceOf(AggregateError);
                expect(error.errors).toEqual([]);
            });
        });
    })
})