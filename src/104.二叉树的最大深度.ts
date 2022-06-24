/*
 * @lc app=leetcode.cn id=104 lang=typescript
 *
 * [104] 二叉树的最大深度
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

/**
 * 递归方式
 */
function maxDepth(root: TreeNode | null): number {
  let res = 0;
  let deepth = 0;

  const traverse = (node: TreeNode) => {
    if (node === null) {
      res = Math.max(res, deepth);
      return res;
    }

    deepth++;

    traverse(node.left);
    traverse(node.right);

    deepth--;
  }

  traverse(root);

  return res;
};
// @lc code=end

