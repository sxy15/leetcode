function plusOne(digits: number[]): number[] {
    let arr = []
    let n = 1
    for(let i = digits.length - 1; i >= 0 ; i--) {
        let num = digits[i] + n
        if(num >= 10) {
            n = 1
            arr.unshift(num % 10)
        } else {
            n = 0
            arr.unshift(num)
        }
    }

    if(n) {
        arr.unshift(n)
    }

    return arr
};