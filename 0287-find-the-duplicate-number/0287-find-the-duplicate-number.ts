function findDuplicate(nums: number[]): number {
    nums.sort((a, b) => a - b)

    let n = null
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] === nums[i - 1]) {
            n = nums[i]
        }
    }

    return n
};