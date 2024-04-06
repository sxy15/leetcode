function removeDuplicates(nums: number[]): number {
    let l = 0
    let i = 0
    let repeat = null
    while(i < nums.length) {
        if(nums[i] !== repeat) {
            nums[l] = nums[i]
            repeat = nums[i]
            l++
        }
        i++
    }

    return l
};