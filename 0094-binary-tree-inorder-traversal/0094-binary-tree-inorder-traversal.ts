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

// function inorderTraversal(root: TreeNode | null): number[] {
//     const arr = []

//     const fun = node => {
//         if(!node) return 

//         fun(node.left)
//         arr.push(node.val)
//         fun(node.right)
//     }

//     fun(root)

//     return arr
// };

function inorderTraversal(root: TreeNode | null): number[] {
    const arr = []

    const stack = []

    let o = root

    while(stack.length || o) {
        while(o) {
            stack.push(o)
            o = o.left
        }

        const n = stack.pop()
        arr.push(n.val)
        o = n.right
    }

    return arr
};