// 分发糖果
/**
 * 如何分发糖果，使得每个孩子既有糖果又满足评分要求
 * 1. 每个孩子至少分到一个糖果
 * 2. 相邻孩子中评分高的孩子必须获得更多的糖果
 * @param {number[]} ratings
 * @return {number}
 */

// 思路：两次遍历，第一次从左到右，第二次从右到左
// 1. 初始化糖果数组为1
// 2. 从左到右，如果右边的孩子评分高，糖果数+1
// 3. 从右到左，如果左边的孩子评分高，糖果数+1
// 4. 返回糖果总数

const candy = (ratings) => {
  const n = ratings.length;
  const left = new Array(n).fill(1);
  for (let i = 1; i < n; i++) {
    if (ratings[i] > ratings[i - 1]) {
      left[i] = left[i - 1] + 1;
    }
  }
  let right = 0, ret = 0;
  for (let i = n - 1; i >= 0; i--) {
    if (i < n - 1 && ratings[i] > ratings[i + 1]) {
      right++;
    } else {
      right = 1;
    }
    ret += Math.max(left[i], right);
  }
  return ret;
};

console.log(candy([1, 0, 2])); // 5 2,1,2
console.log(candy([1, 2, 2])); // 4 1,2,1
console.log(candy([1, 2, 87, 87, 87, 2, 1])); // 13 1,2,3,1,1,2,1