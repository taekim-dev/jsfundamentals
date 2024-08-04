/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s: string) : boolean {
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    let i: number = 0;
    let j: number = s.length-1;

    while (i < j) {
        if (s[i] !== s[j]) {
            return false;
        }
        i++;
        j--;
    }

    return true;
};



const testS1: string = "A man, a plan, a canal: Panama"
console.log(isPalindrome(testS1) === true)

const testS2: string = "race a car"
console.log(isPalindrome(testS2) === false)

const testS3: string = " "
console.log(isPalindrome(testS3) === true)
