import getIntersection from "./arrayIntersection";

describe('getIntersection Function', () => {
    test('returns intersection of two arrays with common elements', () => {
        const arr1 = [1, 2, 3, 4, 5];
        const arr2 = [4, 5, 6, 7, 8];
        const result = getIntersection(arr1, arr2);
        expect(result).toEqual(expect.arrayContaining([4, 5]));
        expect(result.length).toBe(2);
    });

    test('returns an empty array when there are no common elements', () => {
        const arr1 = [1, 2, 3];
        const arr2 = [4, 5, 6];
        const result = getIntersection(arr1, arr2);
        expect(result).toEqual([]);
    });

    test('returns unique elements in the intersection', () => {
        const arr1 = [1, 2, 2, 3, 3, 3];
        const arr2 = [2, 2, 3, 3, 4, 4];
        const result = getIntersection(arr1, arr2);
        expect(result).toEqual(expect.arrayContaining([2, 3]));
        expect(result.length).toBe(2);
    });

    test('handles arrays with different data types', () => {
        const arr1 = [1, '2', 3, 'hello'];
        const arr2 = ['hello', 2, 3, 1];
        const result = getIntersection(arr1, arr2);
        expect(result).toEqual(expect.arrayContaining([1, 3, 'hello']));
        expect(result.length).toBe(3);
    });

    test('returns an empty array when one of the arrays is empty', () => {
        const arr1 = [1, 2, 3];
        const arr2 = [];
        const result = getIntersection(arr1, arr2);
        expect(result).toEqual([]);
    });

    test('returns an empty array when both arrays are empty', () => {
        const arr1 = [];
        const arr2 = [];
        const result = getIntersection(arr1, arr2);
        expect(result).toEqual([]);
    });

    test('handles arrays with nested arrays', () => {
        const arr1 = [1, [2, 3], 4];
        const arr2 = [[2, 3], 5, 6];
        const result = getIntersection(arr1, arr2);
        expect(result).toEqual(expect.arrayContaining([[2, 3]]));
        expect(result.length).toBe(1);
    });

    test('handles arrays with objects', () => {
        const obj1 = { a: 1 };
        const obj2 = { b: 2 };
        const arr1 = [1, obj1, obj2];
        const arr2 = [obj2, 3, 4];
        const result = getIntersection(arr1, arr2);
        expect(result).toEqual(expect.arrayContaining([obj2]));
        expect(result.length).toBe(1);
    });
});
