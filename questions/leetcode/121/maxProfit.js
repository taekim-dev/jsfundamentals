// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock 
// and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. 
// If you cannot achieve any profit, return 0.

function maxProfit(prices){
    if (prices.length === 0) return 0;
    let minSoFar = Number.MAX_SAFE_INTEGER;
    let maxProfit = 0;
    for(const price of prices){
        minSoFar = Math.min(price, minSoFar)
        maxProfit = Math.max(price - minSoFar, maxProfit)
    }
    return maxProfit;
}

module.exports = maxProfit;
