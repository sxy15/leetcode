/**
 * 计算中位数
 *
 * @param arr - 数组
 * @returns 数组的中位数
 */

const median = (arr: number[]): number => {
  const sort = arr.sort((a, b) => a - b);
  const len = sort.length;

  if (len % 2 === 0) {
    return (sort[len / 2 - 1] + sort[len / 2]) / 2;
  }

  return sort[Math.floor(len / 2)];
};

// 测试用例
console.log(median([1, 2, 3, 4, 5])); // 3
console.log(median([1, 2, 3, 4, 5, 6])); // 3.5