function summaryRanges(nums: number[]): string[] {
    let res: string[] = []
    if(nums.length === 1) {
        return [`${nums[0]}`]
    }
    let start = nums[0]
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] !== nums[i - 1] + 1) {
            if(start !== nums[i - 1]) {
                res.push(`${start}->${nums[i - 1]}`)
            } else {
                res.push(`${start}`)
            }
            start = nums[i]
        }
        if(i === nums.length - 1) {
            if(start !== nums[i]) {
                res.push(`${start}->${nums[i]}`)
            } else {
                res.push(`${start}`)
            }
        }
    }

    return res
};