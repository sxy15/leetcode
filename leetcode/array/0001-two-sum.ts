function twoSum(nums: number[], target: number) {
    let hash = {}
    for(let i = 0; i < nums.length; i++) {
        const v = nums[i]
        const key = target - v
        if(hash[key] !== undefined) {
            return [i, hash[key]]
        }

        hash[v] = i
    }
};