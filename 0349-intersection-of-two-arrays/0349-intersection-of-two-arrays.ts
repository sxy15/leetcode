function intersection(nums1: number[], nums2: number[]): number[] {
    let map = new Map()
    let arr: Set<number> = new Set()

    for(let i = 0; i < nums1.length; i++) {
        map.set(nums1[i], 1)
    }

    for(let i = 0; i < nums2.length; i++) {
        if(map.has(nums2[i])) {
            arr.add(nums2[i])
        }
    }

    return Array.from(arr)
};