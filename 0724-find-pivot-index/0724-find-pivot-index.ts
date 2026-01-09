// function pivotIndex(nums: number[]): number {
//     const m = nums.length
//     let prefix = new Array(m + 1).fill(0);
//     let tail = new Array(m + 1).fill(0);

//     for(let i = 0; i < m; i++) {
//         prefix[i + 1] = prefix[i] + nums[i];
//     }

//     for(let i = m - 1; i >= 0; i--) {
//         tail[i] = tail[i + 1] + nums[i];
//     }

//     let index = -1
//     for (let i = 0; i < m; i++) {
//         if (prefix[i] === tail[i + 1]) {
//             index = i;
//             break;
//         }
//     }
   
//     return index
// };

function pivotIndex(nums: number[]): number {
    const total = nums.reduce((c, r) => c + r, 0)
    let leftSum = 0;
    
    for(let i = 0; i < nums.length; i++) {
        if(leftSum === total - leftSum - nums[i]) {
            return i
        }

        leftSum += nums[i]
    }

    return -1
}

