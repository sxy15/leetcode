import { TreeNode } from "./binary_tree"

// 广度优先
export function levelOrder(root: TreeNode | null): number[] {
    // 初始化队列
    const queue = [root]
    // 初始化列表，保存遍历序列
    const list: number[] = []

    while(queue.length) {
        let node = queue.shift() as TreeNode // 队列出列
        list.push(node.val)

        if(node.left) {
            queue.push(node.left)
        }

        if(node.right) {
            queue.push(node.right)
        }
    }

    return list
}