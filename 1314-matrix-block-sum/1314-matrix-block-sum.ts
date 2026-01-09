function matrixBlockSum(mat: number[][], k: number): number[][] {
    const m = mat.length;
    const n = mat[0].length;

    // 构建二维前缀和
    const prefix: number[][] = new Array(m + 1)

    for(let i = 0; i <= m; i++) {
        prefix[i] = new Array(n + 1).fill(0);
    }


    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            prefix[i + 1][j + 1] = mat[i][j] + 
                                    prefix[i][j + 1] + 
                                    prefix[i + 1][j] - 
                                    prefix[i][j];
        }
    }

    // console.table(prefix)

    const answer: number[][] = new Array(m);

    for(let i = 0; i < m; i++) {
        answer[i] = new Array(n).fill(0);
        for(let j = 0; j < n; j++) {
            const r1 = Math.max(0, i - k);
            const c1 = Math.max(0, j - k);
            const r2 = Math.min(m - 1, i + k);
            const c2 = Math.min(n - 1, j + k);

            answer[i][j] = prefix[r2 + 1][c2 + 1] - 
                            prefix[r2 + 1][c1] - 
                            prefix[r1][c2 + 1] + 
                            prefix[r1][c1];
        }
    }

    return answer
};