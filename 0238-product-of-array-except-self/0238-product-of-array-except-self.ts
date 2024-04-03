function productExceptSelf(nums: number[]): number[] {
    let n = nums.length
    const res = new Array(n)
    
    res[0] = 1
    for(let i = 1; i < n; i++) {
        res[i] = res[i - 1] * nums[i - 1]
    }
    // 1 [0] [0] * [1] [0] * [1] * [2]
    // [1] * [2] * [3]    1 * [2] * [3]   1 * [3]   1

    let right = 1
    for(let i = n -1; i >= 0; i--) {
        res[i] *= right
        right *= nums[i]
    }

    return res
};