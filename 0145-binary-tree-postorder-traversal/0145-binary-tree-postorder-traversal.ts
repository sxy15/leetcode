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

// function postorderTraversal(root: TreeNode | null): number[] {
//     const arr = []

//     const fun = node => {
//         if(!node) return 

//         fun(node.left)
//         fun(node.right)
//         arr.push(node.val)
//     }

//     fun(root)

//     return arr
// };

function postorderTraversal(root: TreeNode | null): number[] {

    if(!root) {
        return []
    }

    const stack = [root]
    const arr = []

    while (stack.length) {
       const n = stack.pop()

        n.left && stack.push(n.left)
        n.right && stack.push(n.right)
        arr.unshift(n.val)
    }

    return arr
};