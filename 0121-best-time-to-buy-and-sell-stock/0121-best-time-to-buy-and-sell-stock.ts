// function maxProfit(prices: number[]): number {
//     let sum = 0

//     for(let i = 0; i < prices.length; i++) {
//         for(let j = i; j < prices.length; j++) {
//             let sub = prices[j] - prices[i]
//             sum = Math.max(sum, sub)
//         }
//     }

//     return sum
// };

function maxProfit(prices: number[]): number {
    let maxProfit = 0
    let minPrice = Number.MAX_VALUE

    for(let i = 0; i < prices.length; i++) {
        if(prices[i] < minPrice) {
            minPrice = prices[i]
        }

        if((prices[i] - minPrice) > maxProfit) {
            maxProfit = prices[i] - minPrice
        }
    }

    return maxProfit
}