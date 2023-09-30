/* 初始化数组 */
const arr: number[] = new Array(5).fill(0);
console.log('数组 arr =', arr);
let nums: number[] = [1, 3, 2, 5, 4];
console.log('数组 nums =', nums);

/* 随机访问元素 */
function randomAccess(nums: number[]): number {
    // 在区间 [0, nums.length) 中随机抽取一个数字
    const random_index = Math.floor(Math.random() * nums.length);
    // 获取并返回随机元素
    const random_num = nums[random_index];
    return random_num;
}