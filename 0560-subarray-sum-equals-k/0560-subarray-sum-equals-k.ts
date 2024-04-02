function subarraySum(nums: number[], k: number): number {
    let count = 0
    
    for(let i = 0; i < nums.length; i++) {
        let sum = 0
        for(let j = i;  j < nums.length; j++) {
            sum = sum + nums[j]

            if(sum === k) {
                count += 1
            }
        }
    }

    return count
};