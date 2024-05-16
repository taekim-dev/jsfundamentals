const any = require('./any.js')

describe('Promise any Test', () => {
    describe('standard behavior', () => {
        test('description', () => {
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