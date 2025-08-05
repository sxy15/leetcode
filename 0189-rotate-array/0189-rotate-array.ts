/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var rotate = function(nums, k) {
//     let cache = [...nums]
//     for(let i = 0; i < nums.length; i++) {
//         nums[i] = cache.slice(i - k)[0]
//     }
// };

var rotate = function(nums, k) {
    const n = nums.length
    if(n === 0) return 

    k = k % n;

    const reverse = (arr, start, end) => {
        while(start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]]
            start++
            end--
        }
    }

    reverse(nums, 0, n - 1) // 反转整个数组
    reverse(nums, 0, k - 1) // 反转前k 个
    reverse(nums, k, n - 1) // 反转剩余
}