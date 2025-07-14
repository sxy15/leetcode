function findKthLargest(nums: number[], k: number): number {
    const ns: number[] = nums.sort((a, b) => a - b)

    if(k === 1) {
        return nums[nums.length - 1]
    }

    return ns.slice(-k, -k + 1)[0]
};

