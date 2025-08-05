function canJump(nums: number[]): boolean {
    let maxReach = 0
    let l = nums.length - 1
    for(let i = 0; i <= l; i++) {
        if(maxReach < i) {
            return false
        }
        const v = nums[i]
        maxReach = Math.max(maxReach, i + v)
    }

    return maxReach >= l
};