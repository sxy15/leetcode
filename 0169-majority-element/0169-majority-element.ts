function majorityElement(nums: number[]): number {
    let i = 1
    let count = 1
    let ele = nums[0]

    while(i < nums.length) {
        if(nums[i] === ele) {
            count++
        } else {
            count--
        }
        if(count < 0) {
            ele = nums[i]
            count = 1
        }
        i++
    }

    return ele
};