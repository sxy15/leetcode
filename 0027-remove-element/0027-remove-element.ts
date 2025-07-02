// 1. 快慢指针
// function removeElement(nums, val) {
//     let slow = 0
//     for(let fast = 0; fast < nums.length; fast++) {
//         if(nums[fast] !== val) {
//             nums[slow] = nums[fast]
//             slow++
//         }
//     }

//     return slow

// }

// 2. 双指针（交换）
function removeElement(nums, val) {
    let left = 0; 
    let right = nums.length -1;

    while(left <= right) {
        if(nums[left] === val) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            right--;
        } else {
            left++;
        }
    }

    return left;
}