// TODO: Fix Typescript Error
function arrayMap<T, U>(array: T[], callback: (value : T, index: number, array: T[]) => U): U[] {
    let result: U[] = [];
    array.forEach((element : T, index : number, array : T[]) => {
        result.push(callback(element, index, array));
    });
    return result;
}

export default arrayMap;
