function merge(intervals: number[][]): number[][] {
    let res: number[][] = []
    intervals.sort((a, b) => a[0] - b[0]);
    let start = intervals[0][0]
    let end = intervals[0][1]

    let i = 0

    for(let [s, e] of intervals) {
        i++
        if(s <= end && e >= start) {
            end = Math.max(end, e)
            start = Math.min(start, s)
        } else {
            res.push([start, end])
            start = s
            end = e
        }

        // end
        if(i === intervals.length) {
            res.push([start, end])
        }
    }

    return res
};