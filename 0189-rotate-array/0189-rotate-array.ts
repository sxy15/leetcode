/**
 Do not return anything, modify nums in-place instead.
 */
// function rotate(nums: number[], k: number): void {

//     while(k > 0) {
//         nums.unshift(nums.pop())
//         k--
//     }

   
// };

function rotate(nums: number[], k: number): void {
    k = k % nums.length;
    const count = nums.length - k;
    const nums1 = nums.slice(0, count);
    const nums2 = nums.slice(-k);
    const rotated = [...nums2, ...nums1]

    for (let i = 0; i < nums.length; i++) {
        nums[i] = rotated[i];
    }
};