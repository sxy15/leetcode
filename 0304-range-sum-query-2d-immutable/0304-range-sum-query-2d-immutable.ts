class NumMatrix {
    preSum: number[][] = []

    constructor(matrix: number[][]) {
        let m = matrix.length
        let n = matrix[0].length
        // preSum[i][j] 记录矩阵 [0, 0, i-1, j-1] 的元素和
        this.preSum = Array.from({length: m + 1 }).fill(0).map(() => Array.from({length: n + 1}).fill(0)) as number[][]
        if(m === 0 || n === 0) return

        for(let i = 1; i <= m; i++) {
            for(let j = 1; j <= n; j++) {
                this.preSum[i][j] = this.preSum[i - 1][j] + this.preSum[i][j - 1] - this.preSum[i - 1][j - 1] + matrix[i - 1][j - 1]
            }
        }
    }

    sumRegion(row1: number, col1: number, row2: number, col2: number): number {
        return this.preSum[row2 + 1][col2 + 1] - this.preSum[row2 + 1][col1] - this.preSum[row1][col2 + 1] + this.preSum[row1][col1]
    }
}


/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */