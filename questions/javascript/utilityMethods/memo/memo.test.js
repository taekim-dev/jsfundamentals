const memo = require('./memo.js')

describe('Memo (memoization) Test', () => {
    describe('standard behavior', () => {
        test('handles memoization for a simple function', () => {
            const sum = jest.fn((a, b) => a + b);
            const memoed = memo(sum);

            const res1 = memoed(3, 1)
            const res2 = memoed(3, 1)

            expect(res1).toEqual(4);
            expect(res2).toEqual(4);
            expect(sum).toHaveBeenCalledTimes(1);
        });

        test('handles memoization for a complex function', () => {
            const complexFunc = jest.fn((a, b) => a * b + Math.sqrt(a + b))
            const memoed = memo(complexFunc);

            const expected = complexFunc(3, 1);
            complexFunc.mockClear();

            const res1 = memoed(3, 1)
            const res2 = memoed(3, 1)

            expect(res1).toEqual(expected);
            expect(res2).toEqual(expected);
            expect(complexFunc).toHaveBeenCalledTimes(1);
        });

        test('handles memoization for a complex function with a resolver', () => {
            const complexFunc = jest.fn((obj) => obj.a + obj.b)
            const resolver = jest.fn((obj) => `${obj.a} + ${obj.b}`);
            const memoed = memo(complexFunc, resolver);

            const obj = {
                a : 3,
                b : 1
            }

            const obj2 = {
                a : 3,
                b : 1
            }

            const expected = complexFunc(obj);
            complexFunc.mockClear();

            const res1 = memoed(obj)
            const res2 = memoed(obj2)

            expect(res1).toEqual(expected);
            expect(res2).toEqual(expected);
            expect(complexFunc).toHaveBeenCalledTimes(1);
        });

        test('handles memoization with a custom resolver', () => {
            const complexFunc = jest.fn((obj) => obj.a + obj.b);
            const customResolver = (obj) => Object.keys(obj).sort().map(key => `${key}:${obj[key]}`).join(',');
            const memoed = memo(complexFunc, customResolver);
        
            const obj1 = { a: 3, b: 1 };
            const obj2 = { b: 1, a: 3 };
            const obj3 = { a: 1, b: 3 };
            const obj4 = { b: 3, a: 1 };
        
            const expected1 = complexFunc(obj1);
            const expected3 = complexFunc(obj3);
            complexFunc.mockClear();
        
            const res1 = memoed(obj1); // Should calculate and cache the result
            const res2 = memoed(obj2); // Should use cached result from obj1
            const res3 = memoed(obj3); // Should calculate and cache the result
            const res4 = memoed(obj4); // Should use cached result from obj3
        
            expect(res1).toEqual(expected1);
            expect(res2).toEqual(expected1);
            expect(res3).toEqual(expected3);
            expect(res4).toEqual(expected3);
            expect(complexFunc).toHaveBeenCalledTimes(2);
        });

        test('handles memoization for functions with different hash keys', () => {
            const sum = jest.fn((a, b) => a + b);
            const memoed = memo(sum);

            const res1 = memoed(3, 1)
            const res2 = memoed(3, 1)
            const res3 = memoed(2, 2)

            expect(res1).toEqual(4);
            expect(res2).toEqual(4);
            expect(res3).toEqual(4);
            
            expect(sum).toHaveBeenCalledTimes(2);
        });
    })

    describe('edge cases', () => {
        test('handles memoization with no arguments', () => {
            const noArgs = jest.fn(() => 42);
            const memoed = memo(noArgs);

            const res1 = memoed();
            const res2 = memoed();

            expect(res1).toEqual(42);
            expect(res2).toEqual(42);
            expect(noArgs).toHaveBeenCalledTimes(1);
        });
    })
})