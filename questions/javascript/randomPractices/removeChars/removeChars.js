/**
 * @param {string} input
 * @returns string
 */
function removeChars(input) {
    let result = input.replace(/b/g, '');

    while(true){
        const prevLength = result.length;
        result = result.replace(/ac/g, '');
        const afterLength = result.length;

        if (prevLength === afterLength) break;
    }

    return result;
}


  

removeChars('ab') // 'a'
removeChars('abc') // ''
removeChars('cabbaabcca') // 'caa'

console.log(removeChars('ab') === 'a')
console.log(removeChars('abc') === '')
console.log(removeChars('cabbaabcca') === 'caa')
console.log(removeChars('acbabac') === 'a');
console.log(removeChars('bacbacbacbac') === '');
console.log(removeChars('cccbbaac') === 'ccca');