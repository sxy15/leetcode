function findTheDifference(s: string, t: string): string {
    let map = new Map()
    let tMap = new Map()

    for(let i = 0; i < s.length; i++) {
        map[s[i]] = (map[s[i]] || 0) + 1
    }

    let v = ''
    for(let i = 0; i < t.length; i++) {
        if(!map[t[i]]) {
            v = t[i]
            break
        }
        tMap[t[i]] = (tMap[t[i]] || 0) + 1
        if(map[t[i]] < tMap[t[i]]) {
            v = t[i]
            break
        }
    }

    return v
};