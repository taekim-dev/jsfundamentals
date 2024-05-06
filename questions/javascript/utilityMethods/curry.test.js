require('./curry.js')

describe('Test Curry Function', () => {
    describe('standard behavior', () => {
        test('handles a simple calculation', () => {
            const sum = (a, b) => a + b;
            const curriedSum = curry(sum);
            const addTwo = curriedSum(2);
            const res = addTwo(3);

            expect(res).toEqual(5);
        });

        test('handles a multiple calculations', () => {
            const multiply = (a, b) => a * b;
            const curriedSum = curry(multiply);
            const multiplyTwo = curriedSum(2);
            const multiplyThree = curriedSum(3);

            const resTwo = multiplyTwo(2);
            const resThree = multiplyThree(2);

            expect(resTwo).toEqual(4);
            expect(resThree).toEqual(6);

        });

        test('handles multi sequence calculations', () => {
            const multiply = (a, b) => a * b;
            const curriedMultiply = curry(multiply);
            const multiplyByTwo = curriedMultiply(2);
            const result = multiplyByTwo(3);
        
            expect(result).toEqual(6);
        });
    })

    describe('edge cases', () => {
        test('description', () => {

        });
    })
})