function jump(nums: number[]): number {
    let nextEnd = 0
    let currentEnd = 0
    let jumps = 0

    if(nums.length === 1) {
        return 0
    }

    for(let i = 0; i < nums.length; i++) {
        nextEnd = Math.max(nextEnd, nums[i] + i)

        if(i === currentEnd) {
            currentEnd = nextEnd
            jumps++

            if(currentEnd >= nums.length - 1) {
                return jumps
            }
        }
    }
};