const deepEqual = require('./deepEqual.js')

describe('Deep Equal', () => {
    describe('standard behavior', () => {
        test('handles two numbers equal', () => {
            const res = deepEqual(1, 1)
            expect(res).toEqual(true);
        });

        test('handles two strings equal', () => {
            const res = deepEqual("string1", "string1")
            expect(res).toEqual(true);
        });


        test('handles two bigInt equal', () => {
            const bigNumber1 = 19393939393n;
            const bigNumber2 = BigInt(19393939393);
            const res = deepEqual(bigNumber1, bigNumber2)
            expect(res).toEqual(true);
        });

        test('handles two simple arrays equal', () => {
            const res = deepEqual([1, 2], [1, 2])
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

            const res = deepEqual(obj1, obj2)
            expect(res).toEqual(true);
        });
    })

    describe('edge cases', () => {
        test('handles two different types unequal', () => {
            const res = deepEqual(1, "1")
            expect(res).toEqual(false);
        });

        test('handles two nested arrays equal', () => {
            const res = deepEqual([1, 2, [3]], [1, 2, [3]])
            expect(res).toEqual(true);
        });

        test('handles two nested objects equal', () => {
            const obj1 = {
                name : 'Kim',
                country: 'US',
                address: {
                    state: 'Texas',
                    zipCode: '7777'
                }
            }

            const obj2 = {
                name : 'Kim',
                country: 'US',
                address: {
                    state: 'Texas',
                    zipCode: '7777'
                }
            }

            const res = deepEqual(obj1, obj2)
            expect(res).toEqual(true);
        });
    })
})