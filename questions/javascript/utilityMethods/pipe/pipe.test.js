const pipe = require('./pipe.js')

describe('Pipe Functions', () => {
    let times, plus, subtrack, divide;

    beforeEach(() => {
        times = (y) => (x) => x * y;
        plus = (y) => (x) => x + y;
        subtrack = (y) => (x) => x - y;
        divide = (y) => (x) => x / y;
    });

    describe('standard behavior', () => {
        
        test('handles a single function', () => {
            const input = 1;
            const process = pipe([
                subtrack(1)
            ]) 
            const res = process(input)
            expect(res).toEqual(0);
        });

        test('handles pipe two functions', () => {
            const input = 1;
            const process = pipe([
                times(4),
                plus(4),
            ]) 
            const res = process(input)
            expect(res).toEqual(8);
        });

        test('handles pipe multiple combinations', () => {
            const input = 1;
            const process = pipe([
                times(4),
                plus(4),
                divide(2),
                subtrack(1)
            ]) 
            const res = process(input)
            expect(res).toEqual(3);
        });
    })

    describe('edge cases', () => {
        test('no function is given as parameter', () => {
            const input = 1;
            const process = pipe([]);
            const res = process(input);
            expect(res).toEqual(1);
        });
    })
})