function threeSumClosest(nums: number[], target: number): number {
    nums.sort((a, b) => a - b);

    const n = nums.length
    let closestSum = nums[0] + nums[1] + nums[2]

    for(let i = 0; i < n - 2; i++) {
        if(i > 0 && nums[i] === nums[i - 1]) continue

        let left = i + 1;
        let right = n - 1;

        while(left < right) {
            const currentSum = nums[i] + nums[left] + nums[right]

            if(currentSum === target) return currentSum

            if(Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
                closestSum = currentSum
            }

            if(currentSum < target) {
                left++
            } else {
                right--
            }

        }
    }

    return closestSum;
};