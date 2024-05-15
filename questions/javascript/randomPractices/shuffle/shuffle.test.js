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
        test('shuffle a longer array', () => {
            const input = [1, 2, 3, 4];
            const ITERATIONS = 100000;
            const permutations = {};
            
            function generatePermutations(arr, size, n) {
                if (size === 1) {
                    permutations[arr.join(',')] = 0;
                    return;
                }
                for (let i = 0; i < size; i++) {
                    generatePermutations(arr, size - 1, n);
                    if (size % 2 === 1) {
                        [arr[0], arr[size - 1]] = [arr[size - 1], arr[0]];
                    } else {
                        [arr[i], arr[size - 1]] = [arr[size - 1], arr[i]];
                    }
                }
            }
            
            generatePermutations(input.slice(), input.length, input.length);
            
            for (let i = 0; i < ITERATIONS; i++) {
                const shuffled = shuffle(input);
                const key = shuffled.join(',');
                permutations[key] = (permutations[key] || 0) + 1;
            }
            
            const expectedCount = ITERATIONS / Object.keys(permutations).length;
            const tolerance = expectedCount * 0.05;
            
            for (let key in permutations) {
                const count = permutations[key];
                expect(count).toBeGreaterThanOrEqual(expectedCount - tolerance);
                expect(count).toBeLessThanOrEqual(expectedCount + tolerance);
            }
        });
        
    })

    describe('edge cases', () => {
        test('description', () => {
        });
    })
})