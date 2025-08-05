function removeDuplicates(nums: number[]): number {
    let l = 0
    const cache = new Set()

    for(let r = 0; r < nums.length; r++) {
        if(!cache.has(nums[r])) {
            cache.add(nums[r])
            nums[l] = nums[r]
            l++
        }
    }

    return l
};