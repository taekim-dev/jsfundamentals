const update = require('./update.js');

describe('Update (Immutability helper) Test', () => {
  describe('standard behavior', () => {
    test('handles an array push', () => {
      const arr = [1, 2, 3, 4];
      const newArr = update(arr, { $push: [5, 6] });
      expect(newArr.length).toEqual(6);
      expect(newArr[4]).toEqual(5);
      expect(newArr[5]).toEqual(6);
      expect(arr).toEqual([1, 2, 3, 4]);
    });

    test('handles custom replacer', () => {
      const arr = [1, 2, 3, 4];
      const newArr = update(arr, { 0: { $apply: (item) => item * 2 } });
      // [2, 2, 3, 4]
      expect(newArr.length).toEqual(4);
      expect(newArr[0]).toEqual(2);
      expect(newArr[1]).toEqual(2);
      expect(arr).toEqual([1, 2, 3, 4]);
    });

    test('handles an array mutation', () => {
      const arr = [1, 2, 3, 4];
      const newArr = update(arr, { 0: { $set: 0 } });
      // [0, 2, 3, 4]
      expect(newArr.length).toEqual(4);
      expect(newArr[0]).toEqual(0);
      expect(newArr[1]).toEqual(2);
      expect(arr).toEqual([1, 2, 3, 4]);
    });

    test('handles an object mutation', () => {
      const state = {
        a: {
          b: {
            c: 1
          }
        },
        d: 2
      };

      const newState = update(state, { a: { b: { c: { $set: 3 } } } });
      /*
      {
        a: {
          b: {
            c: 3
          }
        },
        d: 2
      }
      */
      expect(newState.a.b.c).toEqual(3);
      expect(state.a.b.c).toEqual(1);
    });

    test('handles an object merge', () => {
      const state = {
        a: {
          b: {
            c: 1
          }
        },
        d: 2
      };

      const newState = update(state, { a: { b: { $merge: { e: 5 } } } });
      /*
      {
        a: {
          b: {
            c: 1,
            e: 5
          }
        },
        d: 2
      }
      */
      expect(newState.a.b.c).toEqual(1);
      expect(newState.a.b.e).toEqual(5);
      expect(state.a.b.e).toBeUndefined();
    });
  });

  describe('edge cases', () => {
    test('handles empty command object', () => {
      const state = { a: 1, b: 2 };
      const newState = update(state, {});
      expect(newState).toEqual(state);
      expect(newState).not.toBe(state);
    });

    test('handles invalid command', () => {
      const state = { a: 1, b: 2 };
      expect(() => update(state, { a: { $invalid: 3 } })).toThrow();
    });

    test('handles no-op commands', () => {
      const state = { a: 1, b: 2 };
      const newState = update(state, { a: { $set: 1 } });
      expect(newState).toEqual(state);
      expect(newState).not.toBe(state);
    });
  });
});
