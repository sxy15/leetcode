function removeDuplicates(nums: number[]): number {
  if(nums.length <= 2) return nums.length

  let j = 1

  for(let i = 2; i < nums.length; i++) {
    if(nums[i] !== nums[j-1]) {
        j++
        nums[j] = nums[i]
    }
  }

  return j + 1
};