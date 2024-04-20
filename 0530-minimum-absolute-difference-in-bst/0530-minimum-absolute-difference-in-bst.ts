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

function getMinimumDifference(root: TreeNode | null): number {
    let arr: number[] = []

    function dfs(root) {
        if(root === null) return 

        arr.push(root.val)

        if(root.left) {
            dfs(root.left)
        }

        if(root.right) {
            dfs(root.right)
        }
    }

    dfs(root)

    arr.sort((a, b) => a - b)

    let min = Number.MAX_SAFE_INTEGER
    for(let i = 1; i < arr.length; i++) {
        min = Math.min(Math.abs(arr[i] - arr[i - 1]), min)
    }

    return min
};