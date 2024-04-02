// nums = [3,2,2,3], val = 3

function removeElement(nums: number[], val: number): number {
    let l = 0

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== val) {
            nums[l] = nums[i]
            l++
        }
    }

    return l
};