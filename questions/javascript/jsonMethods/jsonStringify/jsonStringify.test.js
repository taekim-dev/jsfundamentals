const jsonStringify = require('./jsonStringify.js')

describe('Json Stringify Test', () => {
    describe('standard behavior', () => {
        test('handles simple object', () => {
            const input = {
                name: "Kim"
            };
            const res = jsonStringify(input);
            const expectedOutput = '{"name":"Kim"}'
            expect(res).toEqual(expectedOutput);
        });

        test('handles a complex object', () => {
            const input = {
                name: "Kim",
                address: "Korea",
                favorite: {
                    morning: "park",
                    night: {
                        everyday: "coding",
                        holiday: "movie"
                    }
                }
            };
            const res = jsonStringify(input);
            const expectedOutput = '{"name":"Kim","address":"Korea","favorite":{"morning":"park","night":{"everyday":"coding","holiday":"movie"}}}';
            expect(res).toEqual(expectedOutput);
        });

        test('handles a simple array', () => {
            const input = [Number(1), new String("2"), new Boolean(true)]
            const res = jsonStringify(input);
            const expectedOutput = '[1,"2",true]'; 
            expect(res).toEqual(expectedOutput);
        });
    })

    describe('edge cases', () => {
        test('handles empty object', () => {
            const input = {};
            const res = jsonStringify(input);
            const expectedOutput = '{}'
            expect(res).toEqual(expectedOutput);
        });
    })
})