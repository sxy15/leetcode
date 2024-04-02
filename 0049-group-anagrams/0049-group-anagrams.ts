function groupAnagrams(strs: string[]): string[][] {
    let map = new Map()

    for(let str of strs) {
        const sortedKey = str.split('').sort().join('')

        map.set(sortedKey, (map.get(sortedKey) || []).concat(str))
    }

    const result = []

    for(const [_, value] of map) {
        result.push(value)
    }

    return result

};