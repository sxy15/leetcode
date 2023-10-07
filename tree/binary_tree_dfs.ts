import { TreeNode } from './binary_tree'

// 深度优先

/* 前序遍历 */
let list: number[] = []
function preOrder(root: TreeNode | null): void {
    if (root === null) {
        return;
    }
    // 访问优先级:根节点 -> 左子树 -> 右子树 
    list.push(root.val as number);
    preOrder(root.left);
    preOrder(root.right);
}

/* 中序遍历 */
function inOrder(root: TreeNode | null): void {
    if (root === null) {
        return;
    }
    // 访问优先级:左子树 -> 根节点 -> 右子树 
    inOrder(root.left);
    list.push(root.val);
    inOrder(root.right);
}

/* 后序遍历 */
function postOrder(root: TreeNode | null): void {
    if (root === null) {
        return;
    }
    // 访问优先级:左子树 -> 右子树 -> 根节点 
    postOrder(root.left);
    postOrder(root.right);
    list.push(root.val);
}