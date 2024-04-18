function wordPattern(pattern: string, s: string): boolean {
    let _s = s.split(' ')
    if(pattern.length !== _s.length) return false
    let map = new Map()
    for(let i = 0; i < pattern.length; i++) {
        let letter = pattern[i]
        let k = map.get(letter)
        
        if(k) {
            if(k !== _s[i]) return false
        } else {
            if(Array.from(map.values()).includes(_s[i])) return false

            map.set(letter, _s[i])
        }
    }

    return true
};