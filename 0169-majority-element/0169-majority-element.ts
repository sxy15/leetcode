function majorityElement(nums: number[]): number {
    let ele = 0;
    let count = Math.floor(nums.length / 2);
    const map = new Map();


    for(let i = 0; i < nums.length; i++) {
        const c = (map.get(nums[i]) || 0) + 1;
         map.set(nums[i], c);
        if(c  > count) {
            ele = nums[i]
            return ele
        }
    }

};