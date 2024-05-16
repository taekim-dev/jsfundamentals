const any = require('./any.js')

describe('Promise any Test', () => {
    describe('standard behavior', () => {
        test('handles a single promise resolved', () => {
            expect().toEqual();
        });

        test('handles a single promise rejected', () => {
            expect().toEqual();
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