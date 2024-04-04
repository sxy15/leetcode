function isPalindrome(x: number): boolean {
    if(x < 0) return false

    let y = `${x}`.split('').reverse().join('')

    return `${x}` === y
};