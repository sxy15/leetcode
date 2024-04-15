function isPalindrome(s: string): boolean {
    let _s = s.toLowerCase().replace(/[^a-z0-9]/g, '').split('')

    return _s.join('') === _s.reverse().join('')
};