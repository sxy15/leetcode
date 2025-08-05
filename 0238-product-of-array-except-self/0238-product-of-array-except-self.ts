function productExceptSelf(nums: number[]): number[] {
    const n = nums.length
    const answer = new Array(nums.length).fill(1)

    for(let i = 1; i < nums.length; i++) {
        answer[i] = answer[i - 1] * nums[i - 1]
    }

    // 计算后缀乘积并合并到结果数组
    let suffixProduct = 1;
    for(let i = n - 2; i >= 0; i--) {
        suffixProduct *= nums[i + 1];
        answer[i] *= suffixProduct
    }

    return answer
};