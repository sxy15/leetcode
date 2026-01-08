// class NumArray {
//     nums = []

//     constructor(nums: number[]) {
//         this.nums = nums
//     }

//     sumRange(left: number, right: number): number {
//         let sum = 0

//         for(let i = left; i <= right; i++) {
//             sum += this.nums[i]
//         }

//         return sum
//     }
// }

class NumArray {
    nums: number[]
    preSums: number[]

    constructor(nums: number[]) {
        this.nums = nums

        let preSums = Array.from({length: nums.length + 1}).fill(0) as number[]

        for(let i = 1; i < preSums.length; i++) {
            preSums[i] = (preSums[i - 1]) + nums[i - 1]
        }

        this.preSums = preSums
    }

    sumRange(left: number, right: number) {
        return this.preSums[right + 1] - this.preSums[left]
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */