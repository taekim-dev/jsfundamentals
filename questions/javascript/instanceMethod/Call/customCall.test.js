require('./customCall.js')

describe('customCall', () => {
    describe('standard behavior', () => {
        test('should set this to the specified object', () => {
            const obj = {
                name : 'kim'
            }
            function testFunction(){
                return this.name;
            }
            const result = testFunction.customCall(obj)
            expect(result).toEqual('kim');
        })

        test('should set this to the specified array', () => {
            const input = [1, 2, 3]
            function Sum(){
                return this.reduce((acc, curr) => acc + curr, 0);
            }
            const result = Sum.customCall(input)
            expect(result).toEqual(6);
        })

        // test('applies a function with initial element', () => {
        //     const input = [1, 2, 3];
        //     const initialValue = 2;
        //     const result = customCall(input, (acc, curr) => acc + curr, initialValue);
        //     expect(result).toEqual([3, 5, 8]);
        // })
    })

    // describe('edge cases', () => {
    //     test('handles an empty array', () => {
    //         const input = [];
    //         const result = customCall(input, (acc, curr) => acc + curr);
    //         expect(result).toEqual([]);
    //     })
    // })
})