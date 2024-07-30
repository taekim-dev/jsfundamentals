/**
 * @param {string} s
 * @return {number}
 */

var numDecodings = function(s) {
    if (s.length === 0 || s[0] === '0') return 0;
    if (s.length === 1) return 1;

    const dp = new Array(s.length + 1).fill(0);
    dp[0] = 1; // empty string
    dp[1] = s[0] !== '0' ? 1 : 0;

    for (let i = 2; i <= s.length; i++) {
        const singleDigit = parseInt(s[i-1]);
        const doubleDigit = parseInt(s.substring(i-2, i));

        if (singleDigit >= 1 && singleDigit <= 9) {
            dp[i] += dp[i-1];
        }

        if (doubleDigit >= 10 && doubleDigit <= 26) {
            dp[i] += dp[i-2];
        }
    }
    
    return dp[s.length];
};

const input1 = "12";
console.log(numDecodings(input1) === 2);

const input2 = "226";
console.log(numDecodings(input2) === 3);

const input3 = "06";
console.log(numDecodings(input3) === 0);

const input4 = "11106";
console.log(numDecodings(input4) === 2);