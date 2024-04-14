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

// function averageOfLevels(root: TreeNode | null): number[] {
//     let res = []
//     let level = 0

//     const dfs = (l, node) => {
//         res[l] ? res[l].push(node.val) : res[l] = [node.val]
//         if (node.left) {
//             dfs(l + 1, node.left);
//         }
//         if (node.right) {
//             dfs(l + 1, node.right);
//         }
//     }
//     dfs(level, root);

//     return res.map(arr => arr.reduce((ac, c) => ac + c) / arr.length);
// };


function averageOfLevels(root: TreeNode | null): number[] {
    let stack = [root]
    let res = []

    while(stack.length > 0) {
        let newStack = []
        let sum = 0

        for(let node of stack) {
            sum += node.val

            if(node.left) {
                newStack.push(node.left)
            }
            if(node.right) {
                newStack.push(node.right)
            }
        }
        res.push(sum / stack.length)
        stack = newStack
    }

    return res
}