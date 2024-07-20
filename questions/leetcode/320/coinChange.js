/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    for(let i = 0; i < coins.length; i++) {
        updateDp(dp, coins[i]);
    }
    return dp[dp.length-1] !== Infinity ? dp[dp.length-1] : -1;

};

var updateDp = function(dp, coin){
    for(let i = 0; i < dp.length; i++) {
        if ((i-coin) >= 0) {
            dp[i] = Math.min(dp[i], dp[i-coin]+1);
        }
    }
}

const coins1 = [1, 2, 5];
const amount1 = 11;
const res = coinChange(coins1, amount1);
console.log(res === 3);

const coins2 = [1];
const amount2 = 0;
const res2 = coinChange(coins2, amount2);
console.log(res2 === 0);

const coins3 = [2];
const amount3 = 3;
const res3 = coinChange(coins3, amount3);
console.log(res3 === -1);

const coins4 = [1, 2, 3, 100];
const amount4 = 99;
const res4 = coinChange(coins4, amount4);
console.log(res4 === 33);
