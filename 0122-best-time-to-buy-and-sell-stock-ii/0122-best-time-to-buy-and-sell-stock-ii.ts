/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0

    let prePrice = Infinity;

    for(let price of prices) {
        if(price > prePrice && prePrice !== Infinity) {
            profit += price - prePrice
        }
        prePrice = price
    }

    return profit
};