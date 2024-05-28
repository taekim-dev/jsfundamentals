const countBy = require('./countBy.js')

describe('Function Name', () => {
    describe('standard behavior', () => {
        test('handles an array input', () => {
            const input = [6.2, 4.3, 6.9];
            const res = countBy(input, Math.floor); 
            expect(res['6']).toEqual(2);
            expect(res['4']).toEqual(1);
            expect(res['5']).toEqual(undefined);
        });

        test('handles an object input', () => {
            const input = [{ n : 3, n : 5, n : 3}]
            const res = countBy(input, (o) => o.n); 

            expect(res['3']).toEqual(2);
            expect(res['5']).toEqual(1);
        });
    })

    describe('edge cases', () => {
        test('handles an empty input', () => {
            
        });

        test('handles an undefined input', () => {
        });
    })
})


countBy([6.1, 4.2, 6.3], Math.floor);
// => { '4': 1, '6': 2 }

countBy([{ n: 3 }, { n: 5 }, { n: 3 }], (o) => o.n);
// => { '3': 2, '5': 1 }

countBy([], (o) => o); // => {}

countBy([{ n: 1 }, { n: 2 }], (o) => o.m); // => { undefined: 2 }