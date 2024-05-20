const sequence = require('./sequence.js')

describe('Sequence Test', () => {
    describe('standard behavior', () => {
        test('handles a single async function', () => {
            const asyncTimes2 = (callback, num) => {
                setTimeout(() => callback(null, num * 2), 100);
            }
            const times2 = sequence([asyncTimes2])
            let res;
            times2((error, data) => {
                res = data;
            }, 1)

            expect(res).toEqual(2);
        });

        test('handles the same async functions called multiple times', () => {
            function asyncTimes2(callback, num) {
                setTimeout(() => {
                    callback(null, num * 2);
                }, 100)
            }

            const times4 = sequence([
                asyncTimes2,
                asyncTimes2,
                asyncTimes2,
            ])

            let res;
            times4((error, data) => {
                res = data;
            }, 1)

            expect(res).toEqual(8);
        });
    })

    describe('edge cases', () => {
        test('description', () => {
        });
    })
})