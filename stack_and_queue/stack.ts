const stack: number[] = [];

/* 元素入栈 */ 
stack.push(1); 
stack.push(2);

/* 访问栈顶元素 */
// const peek = stack[stack.length - 1];
/* 元素出栈 */
// const pop = stack.pop();
/* 获取栈的长度 */
// const size = stack.length;
/* 判断是否为空 */
// const is_empty = stack.length === 0;


/* 初始化队列 */
// TypeScript 没有内置的队列，可以把 Array 当作队列来使用 
const queue: number[] = [];
/* 元素入队 */ 
queue.push(1); 
queue.push(3); 
queue.push(2);
/* 访问队首元素 */ 
const peek = queue[0];
/* 元素出队 */
// 底层是数组，因此 shift() 方法的时间复杂度为 O(n) const pop = queue.shift();
/* 获取队列的长度 */
const size = queue.length;
/* 判断队列是否为空 */
const empty = queue.length === 0;