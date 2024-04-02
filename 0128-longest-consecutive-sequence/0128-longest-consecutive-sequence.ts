function longestConsecutive(nums: number[]): number {
    if(nums.length === 0) return 0

    let _nums = nums.sort((a, b) => a - b)
    let max = 1
    let mid = 1
    for(let i = 0; i < _nums.length; i++) {
        if(_nums[i] + 1 === _nums[i + 1] ) {
            mid += 1
        } else if (_nums[i] === _nums[i + 1]) {
            // none
        } else {
            max = Math.max(mid, max)
            mid = 1
        }
    }

    return max
};