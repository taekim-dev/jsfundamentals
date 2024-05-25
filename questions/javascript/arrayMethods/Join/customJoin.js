export function customJoin(arr, separator) {

    let currStr = "";
    for (let i = 0; i < arr.length; i++) {
        currStr += arr[i];
        if (i !== (arr.length-1)) {
            currStr += separator;
        }
    }
    return currStr;

}