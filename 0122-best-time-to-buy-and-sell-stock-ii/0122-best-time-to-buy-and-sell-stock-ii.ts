function maxProfit(prices: number[]): number {
    let profit = 0
    let i = 0
    let buy = 0

    while(++i < prices.length) {
        profit += Math.max(0, prices[i] - prices[buy++])
    }

    return profit
};