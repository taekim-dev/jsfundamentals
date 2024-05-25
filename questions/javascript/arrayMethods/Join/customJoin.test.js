import { customJoin } from './customJoin'

test('Custom join with space separator', () => {
    const arr = ["Hello", "world", "this", "is", "a", "test"];
    const res = customJoin(arr, " ");

    expect(res).toBe("Hello world this is a test");
});

test('Custom join with comma separator', () => {
    const arr = ["apple", "banana", "orange"];
    const res = customJoin(arr, ", ")

    expect(res).toBe("apple, banana, orange");
});

test('Custom join with empty array', () => {
    const arr = [];
    const res = customJoin(arr, ",");

    expect(res).toBe("");
});

test('Custom join with no separator', () => {
    const arr = ["Hello", "world"];
    const res = customJoin(arr, "");
    
    expect(res).toBe("Helloworld");
});

test('Custom join with single element array', () => {
    const arr = ["single"];
    const res = customJoin(arr, ";")

    expect(result).toBe("single");
});