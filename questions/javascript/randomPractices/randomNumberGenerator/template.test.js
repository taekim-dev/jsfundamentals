
describe('randomNumberGenerator Test', () => {
    describe('standard behavior', () => {
        test('test random number generation between 1 to 10', () => {
            function randomNumberGenerator () {
                return Math.floor((Math.random() * 10)) + 1
            }

            const callCount = 100000;
            const counter = Array(10).fill(0);

            for(let i = 0; i < callCount; i++) {
                const generatedNumber = randomNumberGenerator();
                counter[generatedNumber - 1]++;
            }

            const expectedCount = callCount / 10;
            const tolerance = expectedCount * 0.05;

            for (let i = 0; i < 10; i++) {
                expect(counter[i]).toBeGreaterThanOrEqual(expectedCount - tolerance);
                expect(counter[i]).toBeLessThanOrEqual(expectedCount + tolerance);
            }
        });
    })
})