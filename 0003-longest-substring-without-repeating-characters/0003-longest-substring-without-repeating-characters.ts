function lengthOfLongestSubstring(s: string): number {
   
    const map = new Map()

    let l = 0
    let num = 0

    for(let i = 0; i < s.length; i++) {
        const item = s[i]

        if(map.has(item) && map.get(item) >= l) {
            l = map.get(item) + 1
        }

        num = Math.max(num, i - l + 1)
        map.set(item, i) //
    }

    return num
};