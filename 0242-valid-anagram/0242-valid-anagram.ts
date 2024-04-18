function isAnagram(s: string, t: string): boolean {
    if(s.length !== t.length) return false

    let map = new Map()
    let map2 = new Map()

    for(let i = 0; i < s.length; i++) {
        let letter = s[i]
        map.set(letter, (map.get(letter) || 0) + 1)
    }

    for(let i = 0; i < t.length; i++) {
        let letter = t[i]
        map2.set(letter, (map2.get(letter) || 0) + 1)
    }

    for(let key of map.keys()) {
        if(map.get(key) !== map2.get(key)) return false
    }

    return true
};