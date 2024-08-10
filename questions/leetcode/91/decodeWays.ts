/**
 * @param {string} s
 * @return {number}
 */

var numDecodings = function(s : string) : number {
    if (s.length === 0 || s[0] === '0') return 0;
    if (s.length === 1) return 1;

    const dp : Array<number> = new Array(s.length + 1).fill(0);
    dp[0] = 1; // empty string
    dp[1] = s[0] !== '0' ? 1 : 0;

    for (let i = 2; i <= s.length; i++) {
        const singleDigit : number = parseInt(s[i-1]);
        const doubleDigit : number = parseInt(s.substring(i-2, i));

        if (singleDigit >= 1 && singleDigit <= 9) {
            dp[i] += dp[i-1];
        }

        if (doubleDigit >= 10 && doubleDigit <= 26) {
            dp[i] += dp[i-2];
        }
    }
    
    return dp[s.length];
};

const input12 : string = "12";
console.log(numDecodings(input12) === 2);

const input226 = "226";
console.log(numDecodings(input226) === 3);

const input06 = "06";
console.log(numDecodings(input06) === 0);

const input11006 = "11106";
console.log(numDecodings(input11006) === 2);