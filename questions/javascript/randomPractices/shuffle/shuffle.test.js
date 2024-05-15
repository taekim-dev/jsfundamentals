const shuffle = require('./shuffle.js')

describe('Random Shuffle Test', () => {
    describe('standard behavior', () => {
        test('shuffle a short array', () => {
            const origin = [1, 2];
            const varient = [2, 1];
            const originString = origin.toString();
            const varientString = varient.toString();
            const counter = [0, 0];

            const callCount = 1000;
            const expectedCount = callCount / 2;
            const tolerance = expectedCount * 0.05;

            for(let i = 0; i < callCount; i++) {
                const shuffled = shuffle(origin);
                const shuffledString = shuffled.toString();
                if (shuffledString === originString) {
                    counter[0]++;
                } else if (shuffledString === varientString) {
                    counter[1]++;
                } else {
                    console.error('shuffle not working correctly')
                    return;
                }
            }

            for (let i = 0; i < 2; i++) {
                expect(counter[i]).toBeGreaterThanOrEqual(expectedCount - tolerance);
                expect(counter[i]).toBeLessThanOrEqual(expectedCount + tolerance);
            }
        });
    })

    describe('edge cases', () => {
        test('description', () => {
        });
    })
})