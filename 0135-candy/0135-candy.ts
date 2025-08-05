function candy(ratings: number[]): number {
    const n = ratings.length;
    if (n === 0) return 0;
    const candies = new Array(n).fill(1);

    // 从左到右遍历，确保右边评分高的孩子获得更多糖果
    for(let i = 1; i < n; i++) {
        if(ratings[i] > ratings[i - 1]) {
            candies[i] = candies[i - 1] + 1
        }
    }
    // 从右到左遍历，确保左边评分高的孩子获得更多糖果
    for(let i = n - 2; i >= 0; i--) {
        if(ratings[i] > ratings[i + 1] && candies[i] <= candies[ i + 1]) {
            candies[i] = candies[i + 1] + 1
        }
    }

    return candies.reduce((sum, val) => sum + val, 0)
};