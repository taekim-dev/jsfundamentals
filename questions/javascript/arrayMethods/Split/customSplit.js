// export function customSplit(str, separator, limit) {
//     const res = [];
//     let splitCounter = 0;
//     let currStr = '';

//     for (let char of str) {
//         if (char === separator) {
//             res.push(currStr);
//             currStr = '';
//             splitCounter++;
//             if (limit && res.length === limit) {
//                 return res;
//             }
//         } else {
//             currStr += char;
//         }
//     }

//     res.push(currStr);

//     if (splitCounter === 0) {
//         return [str];
//     }

//     return res;
    
// }


/**
 * Custom split function.
 * @param {string} str
 * @param {string} separator
 * @param {number} [limit]
 * @return {Array<string>} 
 */
export function customSplit(str, separator, limit) {
    const result = [];
    let currentIndex = 0;
    let separatorIndex = str.indexOf(separator, currentIndex);
    const separatorLength = separator.length;

    while (separatorIndex !== -1) {
        result.push(str.slice(currentIndex, separatorIndex));
        currentIndex = separatorIndex + separatorLength;
        if (limit && result.length >= limit) {
            return result;
        }
        separatorIndex = str.indexOf(separator, currentIndex);
    }

    result.push(str.slice(currentIndex));

    return result;
}