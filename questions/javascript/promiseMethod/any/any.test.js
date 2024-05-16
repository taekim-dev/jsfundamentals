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

        test('handles mutilple promises resolved', () => {
            expect().toEqual();
        });

        test('handles mutilple promises resolved asynchronously', () => {
            expect().toEqual();
        });

        test('handles all promises failed', () => {
            expect().toEqual();
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