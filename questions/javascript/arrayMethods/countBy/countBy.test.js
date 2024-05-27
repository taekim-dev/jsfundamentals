const methodName = require('./template.js')

describe('Function Name', () => {
    describe('standard behavior', () => {
        test('description', () => {
            expect().toEqual();
        });
    })

    describe('edge cases', () => {
        test('description', () => {
        });
    })
})






countBy([6.1, 4.2, 6.3], Math.floor);
// => { '4': 1, '6': 2 }

countBy([{ n: 3 }, { n: 5 }, { n: 3 }], (o) => o.n);
// => { '3': 2, '5': 1 }

countBy([], (o) => o); // => {}

countBy([{ n: 1 }, { n: 2 }], (o) => o.m); // => { undefined: 2 }