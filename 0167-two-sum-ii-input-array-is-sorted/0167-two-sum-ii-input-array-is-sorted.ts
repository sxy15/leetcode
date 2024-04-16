function twoSum(numbers: number[], target: number): number[] {
    let left = 0
    let right = numbers.length - 1

    while(left <= right) {
        let l = numbers[left]
        let r = numbers[right]

        let sum = l + r 

        if(sum === target) {
            return [left + 1, right + 1]
        }

        if(sum < target) {
            left++
        }
        if(sum > target) {
            right--
        }
    }

    return []
};