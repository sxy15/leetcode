function findDuplicate(nums: number[]): number {
    nums.sort((a, b) => a - b)

    let n = null
    for(let item of nums) {
       if(n === item) {
        return n
       }
       n = item
    }
};