function isHappy(n: number): boolean {
    let _n = splitNum(n)
    let seen: Set<number> = new Set()

    return checkSumIsOne(_n, seen)
};

function checkSumIsOne(_n, seen) {
    let sum = 0
    for (let num of _n) {
        sum += Math.pow(+num, 2)
    }

    if (sum === 1) {
        return true
    } else if (seen.has(sum)) {
        return false
    } else {
        seen.add(sum)
        return checkSumIsOne(splitNum(sum), seen)
    }
}

function splitNum(num: number): number[] {
    return num.toString().split('').map(Number)
}