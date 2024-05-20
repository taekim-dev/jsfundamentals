const sequence = require('./sequence.js');

describe('Sequence Test', () => {
  describe('standard behavior', () => {
    test('handles a single async function', (done) => {
      const asyncTimes2 = (callback, num) => {
        setTimeout(() => callback(null, num * 2), 100);
      };
      const times2 = sequence([asyncTimes2]);
      times2((error, data) => {
        expect(data).toEqual(2);
        done();
      }, 1);
    });

    test('handles the same async function called multiple times', (done) => {
      const asyncTimes2 = (callback, num) => {
        setTimeout(() => callback(null, num * 2), 100);
      };

      const times4 = sequence([asyncTimes2, asyncTimes2, asyncTimes2]);

      times4((error, data) => {
        expect(data).toEqual(8);
        done();
      }, 1);
    });

    test('handles multiple different async functions', (done) => {
      const asyncAdd2 = (callback, num) => {
        setTimeout(() => callback(null, num + 2), 100);
      };
      const asyncTimes3 = (callback, num) => {
        setTimeout(() => callback(null, num * 3), 100);
      };

      const add2ThenTimes3 = sequence([asyncAdd2, asyncTimes3]);

      add2ThenTimes3((error, data) => {
        expect(data).toEqual(9); // (1 + 2) * 3 = 9
        done();
      }, 1);
    });
  });

  describe('edge cases', () => {
    test('handles an empty function array', (done) => {
      const noOps = sequence([]);

      noOps((error, data) => {
        expect(data).toBeUndefined();
        done();
      }, 1);
    });

    test('handles an error in the async function', (done) => {
      const asyncWithError = (callback, num) => {
        setTimeout(() => callback(new Error('Test Error'), null), 100);
      };
      const asyncTimes2 = (callback, num) => {
        setTimeout(() => callback(null, num * 2), 100);
      };

      const withError = sequence([asyncWithError, asyncTimes2]);

      withError((error, data) => {
        expect(error).toBeInstanceOf(Error);
        expect(error.message).toBe('Test Error');
        done();
      }, 1);
    });
  });
});
