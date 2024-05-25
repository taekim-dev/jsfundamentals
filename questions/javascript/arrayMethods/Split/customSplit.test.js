import { customSplit } from './customSplit.js';

test('Custom split with space separator', () => {
    const str = "Hello world this is a test";
    const result = customSplit(str, " ");

    expect(result).toEqual(["Hello", "world", "this", "is", "a", "test"]);
});

test('Custom split with comma separator', () => {
    const str = "apple,banana,orange";
    const result = customSplit(str, ",")
    
    expect(result).toEqual(["apple", "banana", "orange"]);
});

test('Custom split with limit', () => {
    const str = "one, two, three, four, five";
    const result = customSplit(str, ", ", 3);
    
    expect(result).toEqual(["one", "two", "three"]);
});

test('Custom split with no separator found', () => {
    const str = "no separator here";
    const result = customSplit(str, ",");

    expect(result).toEqual(["no separator here"]);
});

test('Custom split with empty string', () => {
    const str = "";
    const result = customSplit(str, ",");

    expect(result).toEqual([""]);
});