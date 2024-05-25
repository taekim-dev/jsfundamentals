export function customJoin(arr, separator) {
    if(arr.length === 0) return "";

    let res = arr[0];
    for(let i = 1; i < arr.length; i++) {
        res += separator + arr[i];
    }

    return res;
}