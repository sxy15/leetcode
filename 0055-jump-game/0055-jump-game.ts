function canJump(nums: number[]): boolean {
    let len = nums.length

    let jumpLeft = nums[0] // 剩余步数

    for(let i = 0; i < len; i++) {
        jumpLeft = Math.max(jumpLeft, nums[i])

        if(jumpLeft === 0 && i !== nums.length - 1) return false

        if(jumpLeft >= nums.length -1 ) return true

        jumpLeft--
    }

    return true
};