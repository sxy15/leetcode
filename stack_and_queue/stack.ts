const stack: number[] = [];

/* 元素入栈 */ 
stack.push(1); 
stack.push(2);

/* 访问栈顶元素 */
const peek = stack[stack.length - 1];
/* 元素出栈 */
const pop = stack.pop();
/* 获取栈的长度 */
const size = stack.length;
/* 判断是否为空 */
const is_empty = stack.length === 0;
