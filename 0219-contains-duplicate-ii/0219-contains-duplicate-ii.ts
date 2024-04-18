function containsNearbyDuplicate(nums: number[], k: number): boolean {
    let map = new Map()

    for(let i = 0; i < nums.length; i++) {
        let _m = map.get(nums[i]) || []
        map.set(nums[i], [..._m, i])
    }

    for(let idxs of map.values()) {
        if(idxs.length > 1) {
            for(let i = 1; i < idxs.length; i++) {
                if(idxs[i] - idxs[i - 1] <= k) {
                    return true
                } 
            }
        }
    }

    return false
};