const lotters = new Set(['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'])

function reverseVowels(s: string): string {
    let arr = s.split('')
    let left = 0
    let right = arr.length - 1

    while(left <= right) {
        if(lotters.has(arr[left]) && lotters.has(arr[right])) {
            let temp = arr[left]
            arr[left] = arr[right]
            arr[right] = temp
            left++
            right--
        } else if (!lotters.has(arr[left])) {
            left++
        } else {
            right--
        }
    }

    return arr.join('')
};