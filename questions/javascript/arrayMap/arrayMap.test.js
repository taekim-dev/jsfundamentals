describe('Array Map Functionality', () => {
    test('correctly maps an array', () => {
      expect([1, 2, 3].map(x => x + 1)).toEqual([2, 3, 4]);
    });
});
  