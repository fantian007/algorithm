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
let maxDeepth = 0;

const calcMaxDeepth = (root: TreeNode) => {
  if (root === null) {
    return 0;
  }

  const l = calcMaxDeepth(root.left);
  const r = calcMaxDeepth(root.right);

  maxDeepth = Math.max(maxDeepth, l + r);

  return Math.max(l, r) + 1;
}

function diameterOfBinaryTree(root: TreeNode | null): number {
  calcMaxDeepth(root);

  return maxDeepth;
};
// @lc code=end

