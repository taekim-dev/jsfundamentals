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

    })

})