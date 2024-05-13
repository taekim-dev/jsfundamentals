const jsonParse = require('./jsonParse.js')

describe('Json Parse Test', () => {
    describe('standard behavior', () => {
        test('handles simple object', () => {
            const input = '{"name":"Kim"}'
            const res = jsonParse(input);
            expect(res.name).toEqual("Kim");
        });

        test('handles a complex object', () => {
            const input = '{"name":"Kim","address":"Korea","favorite":{"morning":"park","night":{"everyday":"coding","holiday":"movie"}}}';
            const res = jsonParse(input);
            expect(res.name).toEqual("Kim");
            expect(res.favorite.morning).toEqual("park");
            expect(res.favorite.night.holiday).toEqual("movie");

        });

        test('handles a simple array', () => {
            const input = '[1,"2",true]'; 
            const res = jsonParse(input);
            expect(res.length).toEqual(3);
            expect(res[0]).toEqual(1);
            expect(res[2]).toEqual(true);
        });
    })

    describe('edge cases', () => {
        test('handles empty object', () => {
            const input = '{}'
            const res = jsonParse(input)
            expect(res).toEqual({});
        });
    })
})