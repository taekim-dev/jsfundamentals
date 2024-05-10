require('./arraySome.js')

describe('Array Some method', () => {
    describe('standard behavior', () => {
        test('applied with a simple callback function', () => {
            const input = [1, 2, 3];
            const even = (element) => element % 2 === 0;
            const res = input.arraySome(even)

            expect(res).toEqual(true);
        });

        test('applied with a complex callback function', () => {
            const input = {
                name : "Kim",
                address : {
                    country : "Korea",
                    city: "Seoul"
                },
                
                name : "David",
                address : {
                    country : "Canada",
                    city: "Montreal"
                }   
            };
            const isPersonUSbased = (peopleList) => {
                for (person in peopleList) {
                    if (person?.address?.city === "United States"){
                        return true;
                    }
                }

                return false
            }
            const res = input.arraySome(isPersonUSbased)

            expect(res).toEqual(false);
        });

        test('applied with a this argument', () => {
            const input = [1, 2, 3];
            const even = (element) => element % 2 === 0;
            const res = input.arraySome(even)

            expect(res).toEqual(true);
        });
    })

    describe('edge cases', () => {
        test('description', () => {
        });
    })
})