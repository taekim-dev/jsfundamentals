function arrayMap<T, U>(array: T[], callback: (value: T, index: number, array: T[]) => U): U[] {
    let result: U[] = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array));
    }
    return result;
}

export default arrayMap;
