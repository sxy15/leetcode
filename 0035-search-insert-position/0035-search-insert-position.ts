function searchInsert(nums: number[], target: number): number {
    
    let i = 0

    let min = -1
    let max = -1
    while(i < nums.length) {
        if(nums[i] === target) {
            return i
        }

        if(nums[i] < target) {
            min = i
        }

        if(nums[i] > target && !!max) {
            max = i
        }

        i++
    }

    return min >= 0 ? (min + 1) : max
};