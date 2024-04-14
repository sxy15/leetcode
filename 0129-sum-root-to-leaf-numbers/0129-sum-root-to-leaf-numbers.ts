/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function sumNumbers(root: TreeNode): number {
    let paths = [], sum = 0;
    let queue: any[] = [[root, root.val]]

    while(queue.length > 0) {
        const [node, nums] = queue.pop()

        if(node !== null && node.left) {
            queue.push([node.left, `${nums}${node.left.val}`])
        }
        if(node !== null &&  node.right) {
            queue.push([node.right, `${nums}${node.right.val}`])
        }

        if(!node.left && !node.right) {
            paths.push(nums)
        }
    }

    for(let i = 0; i < paths.length; i++) {
        sum += +paths[i]
    }

    return sum
};