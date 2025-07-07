function twoSum(nums: number[], target: number): number[] {
    const map = {}
    let res = []

    for(let i = 0; i < nums.length; i++) {
        const item = nums[i]
        const rest = target - item

        if(map[rest]) {
            res = []
        }

    }
};