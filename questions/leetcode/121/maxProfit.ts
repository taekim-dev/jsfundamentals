function maxProfit(prices: number[]) : number{
    if (prices.length === 0) return 0;
    let lowestPriceSeen : number = Number.MAX_SAFE_INTEGER;
    let maximumProfit : number = 0;
    for(const currentPrice of prices){
        if (currentPrice < lowestPriceSeen) {
            lowestPriceSeen = currentPrice;
        }

        const potentialProfit = currentPrice - lowestPriceSeen;
        if (maximumProfit < potentialProfit) { 
            maximumProfit = potentialProfit;
        }
    }
    return maximumProfit;
}

module.exports = maxProfit;