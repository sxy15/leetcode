function isIsomorphic(s: string, t: string): boolean {
    if(s.length !== t.length) return false

    let map = new Map()
    for(let i = 0; i < s.length; i++) {
        let letter = s[i]
        let rep = t[i]
        let m = map.get(letter)
        if(m) {
            if(m !== rep) return false
        } else {
            let keys = Array.from(map.values())
            if(keys.includes(rep)) {
                return false
            }
            map.set(letter, rep)
        }
    }

    return true
};