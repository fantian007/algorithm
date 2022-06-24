/*
 * @lc app=leetcode.cn id=337 lang=typescript
 *
 * [337] 打家劫舍 III
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

function rob(root: TreeNode | null): number {

  /**
   * 返回二维数组 [不抢的金额，抢的金额]
   */
  const dp = (root: TreeNode): [number, number] => {
    if (root == null) {
      return [0, 0];
    }
  
    const left: [number, number] = dp(root.left);
    const right: [number, number] = dp(root.right);

    // 抢
    const do_it = root.val + left[0] + right[0];
    // 不抢
    const not_do_it = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);

    return [not_do_it, do_it];
  }

  const r = dp(root);

  return Math.max(r[0], r[1]);
};
// @lc code=end

