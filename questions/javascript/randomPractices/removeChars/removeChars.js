/**
 * @param {string} input
 * @returns string
 */
function removeChars(input) {
    let newStr = [];
    for(let i = 0; i < input.length; i++) {
        if (input[i] === 'b'){
            continue;
        }
        newStr.push(input[i]);
    }

    let j = 0; 
    let newStr2 = [];
    while (j < newStr.length) {
        if (newStr[j] === 'a' && (j+1) < newStr.length) {
            if (newStr[j+1] === 'c'){
                j += 2;
                continue;
            }
        }
        newStr2.push(newStr[j]);
        j++;
    }

    console.log(newStr2);
    return newStr2.toString();
}


  

removeChars('ab') // 'a'
removeChars('abc') // ''
removeChars('cabbaabcca') // 'caa'

console.log(removeChars('ab') === 'a')
console.log(removeChars('abc') === '')
console.log(removeChars('cabbaabcca') === 'caa')