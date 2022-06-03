/*
 * @lc app=leetcode.cn id=543 lang=typescript
 *
 * [543] 二叉树的直径
 */

// @lc code=start
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

const calcMaxDeepth = (root: TreeNode) => {
  if (root === null) {
    return 0;
  }

  return Math.max(calcMaxDeepth(root.left), calcMaxDeepth(root.right)) + 1;
}

const traverse = (root: TreeNode) => {
  if (root === null) {
    return;
  }

  const leftDeepth = calcMaxDeepth(root.left);
  const rightDeepth = calcMaxDeepth(root.right);

  maxDeepth = Math.max(maxDeepth, leftDeepth + rightDeepth);

  traverse(root.left);
  traverse(root.right)
}

let maxDeepth = 0;

function diameterOfBinaryTree(root: TreeNode | null): number {
  traverse(root);

  return maxDeepth;
};
// @lc code=end

