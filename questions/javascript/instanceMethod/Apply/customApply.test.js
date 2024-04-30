require('./customApply.js')

describe('customApply', () => {
    describe('standard behavior', () => {
        test('should set this to the specified array', () => {
            const input = [1, 2, 3];
            function sum(a, b, c) {
                return a + b + c;
            }
            const result = sum.customApply(null, input)
            expect(result).toEqual(6);
        })

        // test('should set this to the specified array', () => {
        //     const input = [1, 2, 3]
        //     function Sum(){
        //         return this.reduce((acc, curr) => acc + curr, 0);
        //     }
        //     const result = Sum.customCall(input)
        //     expect(result).toEqual(6);
        // })

    })

})