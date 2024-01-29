/**
 * 双指针
 * 给你一个长度为 n 的整数数组 nums 和一个目标值 target 。请你从 nums 中选出三个整数，使得它们的和与 target 最接近。
 * 返回这三个数的和。假定每组输入只存在唯一答案。
 */

/**
 * nums = [-1,2,1,-4], target = 1
 * 输出：2
 * 解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。
 * 
 * nums = [0,0,0], target = 1
 * 输出：0
 */

function threeSumClosest(nums: number[], target: number): number {
    let length = nums.length
    let res = Number.MAX_SAFE_INTEGER
    
    nums.sort((a, b) => a - b)

    for (let i = 0; i < length; i++) {
        let left = i + 1
        let right = length - 1

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right]
            if (Math.abs(sum - target) < Math.abs(res - target)) {
                res = sum
            }

            if (sum > target) {
                right--
            } else if (sum < target) {
                left++
            } else {
                return res
            }
        }
    
    }

    return res
}

console.log(threeSumClosest([-1,2,1,-4], 1))
console.log(threeSumClosest([0,0,0], 0))