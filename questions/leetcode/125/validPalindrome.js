/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    let i = 0;
    let j = s.length-1;

    while (i < j) {
        if (s[i] !== s[j]) {
            return false;
        }
        i++;
        j--;
    }

    return true;
};



const s1 = "A man, a plan, a canal: Panama"
console.log(isPalindrome(s1) === true)

const s2 = "race a car"
console.log(isPalindrome(s2) === false)

const s3 = " "
console.log(isPalindrome(s3) === true)
