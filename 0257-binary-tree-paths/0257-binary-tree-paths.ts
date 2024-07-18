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

function binaryTreePaths(root: TreeNode | null): string[] {
    let result = []
    let path = []

    function traverse(node : TreeNode | null) {
        if(!node) return;

        if(!node.left && !node.right) {
            path.push(node.val)
            result.push(path.join('->'))
            path.pop()
            return;
        }

        path.push(node.val)
        traverse(node.left);
        traverse(node.right);
        path.pop();
    } // 1 2 5 

    traverse(root)

    return result
};