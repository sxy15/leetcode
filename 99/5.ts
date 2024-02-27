// 无重叠区间

/**
 * 1. 给定一个区间的集合，找到需要移除区间的最小数量，使剩余区间互不重叠
 * @param {number[][]} intervals
 * @return {number}
 */

// 1. 按照区间的结束位置排序
// 2. 遍历区间，如果当前区间的开始位置小于前一个区间的结束位置，则需要移除当前区间
// 3. 返回移除区间的数量

const eraseOverlapIntervals = (intervals) => {
  if (intervals.length === 0) {
    return 0;
  }
  intervals.sort((a, b) => a[1] - b[1]); // 顺序为升序
  let total = 0, prev = intervals[0][1]; // prev为前一个区间的结束位置
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < prev) {
      total++;
    } else {
      prev = intervals[i][1];
    }
  }
  return total;
};

console.log(eraseOverlapIntervals([[1, 2], [2, 3], [3, 4], [1, 3]])); // 1