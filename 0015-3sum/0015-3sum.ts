function threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => a - b) // 排序
    const res = []
    let n = nums.length
    for(let i = 0; i < n - 2; i++) {
        if(nums[i] > 0) break
        if(i > 0 && nums[i] === nums[i - 1]) continue
        
        // 转 two sum
        let target = 0 - nums[i]
        let lo = i + 1
        let hi = n -1
        while(lo < hi) {
            let sum = nums[lo] + nums[hi]
            if(sum === target) {
                res.push([nums[i], nums[lo], nums[hi]])
                lo++
                while(lo < hi && nums[lo] === nums[lo -1]) {
                    lo++
                }
                hi--
                while(lo < hi && nums[hi] === nums[hi + 1]) {
                    hi--
                }
            }
            if(sum < target) {
                lo++
            }
            if(sum > target) {
                hi--
            }
        }
    }

    return res
};