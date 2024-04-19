function insert(intervals: number[][], newInterval: number[]): number[][] {
    let [_start, _end] = newInterval

    if(!intervals.length) {
        return [newInterval]
    }

    let arr: number[][] = []

    let flag = true
    let i = 0

    for (let [start, end] of intervals) {
        i++
        // 前 后
        if (end < _start || start > _end) {
            arr.push([start, end])
        }

        if (start <= _start && _start <= end || start >= _start && start <= _end) {
            _start = Math.min(_start, start)
            _end = Math.max(_end, end)
        }

        if(i === intervals.length && flag) {
            arr.push([_start, _end])
        }
    }

    return arr.sort((a, b) => a[0] - b[0])
};