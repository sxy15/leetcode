function twoSum(nums: number[], target: number): number[] {
    let map = new Map()

    for(let i = 0; i < nums.length; i++) {
        let need = target - nums[i]
        if(map.has(need)) {
            return [i, map.get(need)]
        } else {
            map.set(nums[i], i)
        }
    }
};