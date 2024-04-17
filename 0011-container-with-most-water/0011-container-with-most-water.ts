// function maxArea(height: number[]): number {
//     let area = 0

//     for(let i = 0; i < height.length; i++) {
//         for(let j =0; j < height.length; j++) {
//             area = Math.max(Math.min(height[i], height[j]) * (j - i), area)
//         }
//     }

//     return area
// };

function maxArea(height: number[]): number {
    let area = 0
    let l = 0
    let r = height.length - 1

    while(l < r) {
        let left = height[l]
        let right = height[r]
        let width = r - l
        let current = caclArea(left, right, width)
        area = Math.max(area, current)

        if(left <= right) {
            l++
        } else {
            r--
        }
    }

    return area
}

function caclArea(left: number, right: number, width: number): number {
    return Math.min(left, right) * width;
}