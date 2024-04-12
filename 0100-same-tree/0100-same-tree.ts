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

// function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
//     function dfs(root, str = '') {
//         if(root === null) return '_'

//         str += root.val
//         str += dfs(root.left)
//         str += dfs(root.right)

//         return str
//     }

//     let tree1 = dfs(p)
//     let tree2 = dfs(q)

//     return tree1 === tree2
// };


function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    function dfs(root) {

        if(root === null) return '_'

        let queue = [root]
        let str = `${root.val}` || '_'

        while (queue.length > 0) {
            const current = queue.shift()

            if (current.left !== null) {
                queue.push(current.left)
                str += current.left.val
            } else {
                str += '_'
            }
            if (current.right !== null) {
                queue.push(current.right)
                str += current.right.val
            } else {
                str += '_'
            }
        }

        return str
    }

    let tree1 = dfs(p)
    let tree2 = dfs(q)

    return tree1 === tree2
};