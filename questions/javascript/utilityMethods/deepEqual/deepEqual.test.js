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

        test('handles undefined values', () => {
            const res = deepEqual(undefined, undefined);
            expect(res).toEqual(true);
        });

        test('differentiates null from undefined', () => {
            const res = deepEqual(null, undefined);
            expect(res).toEqual(false);
        });        

        test('handles Date objects', () => {
            const date1 = new Date(2020, 1, 1);
            const date2 = new Date(2020, 1, 1);
            const res = deepEqual(date1, date2);
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
        test('calls the function in reversed order', () => {
            const arrayOne = [1, 2, 3];
            const arrayTwo = [1, 2, 3];

            const resOne = deepEqual(arrayOne, arrayTwo);
            expect(resOne).toEqual(true);

            const resTwo = deepEqual(arrayTwo, arrayOne);
            expect(resTwo).toEqual(true);
        });

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

        test('handles objects with properties in different orders', () => {
            const obj1 = { a: 1, b: 2 };
            const obj2 = { b: 2, a: 1 };
            const res = deepEqual(obj1, obj2);
            expect(res).toEqual(true);
        });
        
        test('handles recursive objects', () => {
            const obj1 = {};
            obj1.self = obj1;
            const obj2 = {};
            obj2.self = obj2;
            const res = deepEqual(obj1, obj2);
            expect(res).toEqual(true);
        });

        test('handles objects with null and undefined properties', () => {
            const obj1 = { a: null, b: 4 };
            const obj2 = { a: undefined, b: 4 };
            const obj3 = { b: 4 };
        
            expect(deepEqual(obj1, obj2)).toEqual(false);
            expect(deepEqual(obj1, obj3)).toEqual(false);
            expect(deepEqual(obj2, obj3)).toEqual(false);
        });
        
    })
})