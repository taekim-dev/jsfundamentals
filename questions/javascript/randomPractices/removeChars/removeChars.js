/**
 * @param {string} input
 * @returns string
 */
function removeChars(input) {
    let cleanedString = input.replace(/b/g, '');

    let previousLength;

    do {
        previousLength = cleanedString.length;
        cleanedString = cleanedString.replace(/ac/g, '');
    } while(previousLength !== cleanedString.length);

    return cleanedString;
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