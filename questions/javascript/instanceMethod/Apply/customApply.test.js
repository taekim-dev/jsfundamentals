require('./customApply.js')

describe('customApply', () => {
    describe('standard behavior', () => {
        test('should correctly invoke the function without a this context', () => {
            const input = [1, 2, 3];
            function sum(a, b, c) {
                return a + b + c;
            }
            const result = sum.customApply(null, input)
            expect(result).toEqual(6);
        })

        test('should correctly apply a custom this context', () => {
            const input = [1, 2]
            function Sum(a, b){
                return a + b;
            }
            const result = Sum.customApply(Sum, input)
            expect(result).toEqual(3);
        })

        test('should handle calls with no arguments array', () => {
            function greet() {
                return `Hello, ${this.name}`;
            }
            const context = { name: 'Alice' };
            const result = greet.customApply(context);
            expect(result).toEqual('Hello, Alice');
        });

    })

})