function removeDuplicates(nums: number[]): number {
    const cache: Map<any, number> = new Map()

    let l = 0

    for(let r = 0; r < nums.length; r++) {
        const val = cache.get(nums[r]) || 0
        if(!val || val < 2) {
            cache.set(nums[r], val + 1);
            nums[l] = nums[r]
            l++
        }
    
    }

    return l
};