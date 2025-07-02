function merge(nums1, m, nums2, n) {
    let i = m - 1; // nums1 有效元素末尾指针
    let j = n - 1; // nums2 末尾指针
    let k = m + n - 1; // 合并后数组末尾指针

    // 从后向前合并，优先处理较大元素
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }

    // 若 nums2 还有剩余元素，直接复制到 nums1 前面
    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }
}