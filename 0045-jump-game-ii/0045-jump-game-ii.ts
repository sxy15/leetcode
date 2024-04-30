function jump(nums: number[]): number {
   let n = nums.length

   if(n === 1) return 0

   let jump = 1
   let reachable = nums[0]
   let max_within_reachable = nums[0]

   if(reachable >= n - 1) {
     return jump
   }

   for(let i = 1; i < n; i++) {
    max_within_reachable = Math.max(max_within_reachable, i + nums[i])

    if(i === reachable) {
        reachable = max_within_reachable;
        jump++;
        if(reachable >= n - 1) {
            break
        }
    }
   }

   return jump
};