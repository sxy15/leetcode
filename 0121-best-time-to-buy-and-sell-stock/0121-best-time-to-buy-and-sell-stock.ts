/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0

    let inPrice = Infinity;
    let out = 0

    for(const price of prices) {
        if(price < inPrice) {
            inPrice = price
            out = 0
        }
        if(price > out && inPrice !== Infinity) {
            out = price
            profit = Math.max(out - inPrice, profit)
        }
    }

    return profit
};