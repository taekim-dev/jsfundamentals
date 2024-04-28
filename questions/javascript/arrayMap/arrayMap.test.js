const arrayMap = require('./arrayMap.js');

describe('arrayMap', () => {
    describe('standard behavior', () => {
        test('applies a function to every element', () => {
            const input = [1, 2, 3];
            const result = arrayMap(input, x => x * 2);
            expect(result).toEqual([2, 4, 6]);
        })

        test('applies with index passed to the callback', () => {
            const input = [1, 2, 3];
            const result = arrayMap(input, (x, index) => x * 2 + index);
            const expected = ([ 1 * 2 + 0, 2 * 2 + 1, 3 * 2 + 2]);
            expect(result).toEqual(expected);
        })
    })

    describe('edge cases', () => {
        test('handles an empty array', () => {
            const input = [];
            const result = arrayMap(input, x => x + 1);
            expect(result).toEqual([]);
        })
    })
})




// describe('arrayMap', () => {
//     describe('standard behavior', () => {
//       test('applies a function to every element', () => {
//         const input = [1, 2, 3];
//         const result = arrayMap(input, x => x + 1);
//         expect(result).toEqual([2, 3, 4]);
//       });
//     });
  
//     describe('edge cases', () => {
//       test('handles an empty array', () => {
//         const result = arrayMap([], x => x + 1);
//         expect(result).toEqual([]);
//       });
  
//       test('handles array with undefined elements', () => {
//         const input = [undefined, undefined, undefined];
//         const result = arrayMap(input, x => 1);
//         expect(result).toEqual([1, 1, 1]);
//       });
//     });
  
//     describe('error handling', () => {
//       test('throws when callback is not a function', () => {
//         expect(() => {
//           arrayMap([1, 2, 3], 'not a function');
//         }).toThrow(TypeError);
//       });
//     });
// });
  