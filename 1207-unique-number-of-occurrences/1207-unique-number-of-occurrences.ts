function uniqueOccurrences(arr: number[]): boolean {
    let map = new Map()

    for(let item of arr) {
        map.set(item, (map.get(item) || 0) + 1)
    }

    const set = new Set()
    for (let [key, value] of map) {
        set.add(value)
    }

    return set.size === map.size
};