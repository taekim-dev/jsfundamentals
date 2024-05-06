const deepClone = require('./deepClone.js')

describe('Deep Clone', () => {
    describe('standard behavior', () => {
        test('handles two numbers equal', () => {
            const res = deepClone(1, 1)
            expect(res).toEqual(true);
        });

        test('handles two simple arrays equal', () => {
            const res = deepClone([1, 2], [1, 2])
            expect(res).toEqual(true);
        });

        test('handles two simple objects equal', () => {
            const obj1 = {
                name : 'Kim',
                country: 'US'
            }

            const obj2 = {
                name : 'Kim',
                country: 'US'
            }

            const res = deepClone(obj1, obj2)
            expect(res).toEqual(true);
        });
    })

    describe('edge cases', () => {
        test('description', () => {
            
        });
    })
})