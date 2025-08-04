function merge(nums1, m, nums2, n) {
    let l1 = m -1
    let l2 = n - 1
    let current = m + n - 1;

    while(current >= 0) {
        if(l1 >= 0 && l2 >= 0) {
            nums1[current--] = nums1[l1] >= nums2[l2] ? nums1[l1--] : nums2[l2--]
        } else {
            if(l1 >= 0) {
                nums1[current--] = nums1[l1--]
            } else {
                nums1[current--] = nums2[l2--]
            }
        }
    }
}