/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    nums.sort((a, b) => a -b)

    let j = 0
    for(let i = 0; i < nums.length; i ++) {
        if(nums[i] !== 0) {
            let tem = nums[j]
            nums[j] = nums[i]
            nums[i] = tem
            j++
        }

    }
};