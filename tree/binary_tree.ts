import { levelOrder } from './binary_tree_bfs'

/* 二叉树节点类 */
export class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val; // 节点值
        this.left = left === undefined ? null : left; // 左子节点引用
        this.right = right === undefined ? null : right; // 右子节点引用
    }
}

let n1 = new TreeNode(1),
    n2 = new TreeNode(2),
    n3 = new TreeNode(3),
    n4 = new TreeNode(4),
    n5 = new TreeNode(5);
// 构建引用指向(即指针) 
n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;

console.log(n1)
// TreeNode {
//     val: 1,
//     left: TreeNode {
//       val: 2,
//       left: TreeNode { val: 4, left: null, right: null },
//       right: TreeNode { val: 5, left: null, right: null }
//     },
//     right: TreeNode { val: 3, left: null, right: null }
//   }

const nodes = levelOrder(n1)

console.log(nodes) // [ 1, 2, 3, 4, 5 ]