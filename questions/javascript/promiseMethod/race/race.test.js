const race = require('./race.js')

describe('Promise Race Test', () => {
    describe('standard behavior', () => {
        test('handles a single promise', async () => {
            const input = [];
            const promise = new Promise((resolve, reject) => {
                resolve('successful');
            })
            input.push(promise);
            const res = race(input);

            const output = await res;
            expect(output).toEqual('successful');
            
        });

        test('handles multiple promises with first resolved promise', () => {


            expect().toEqual();
        });

        test('handles multiple promises with first rejected promise', () => {


            expect().toEqual();
        });
    })

    describe('edge cases', () => {
        test('handles empty input', () => {

        });
    })
})