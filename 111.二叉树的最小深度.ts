/*
 * @lc app=leetcode.cn id=111 lang=typescript
 *
 * [111] 二叉树的最小深度
 */

// @lc code=start
// Definition for a binary tree node.
// class TreeNode {
//     val: number
//     left: TreeNode | null
//     right: TreeNode | null
//     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//         this.val = (val===undefined ? 0 : val)
//         this.left = (left===undefined ? null : left)
//         this.right = (right===undefined ? null : right)
//     }
// }

function minDepth(root: TreeNode | null): number {
  const queue: TreeNode[] = [];

  if (root === null) {
    return 0;
  }

  queue.push(root);
  let deepth = 1;

  while (queue.length) {
    const len = queue.length;

    for (let i = 0; i < len; i++) {
      const cur = queue.shift();

      if (cur.left === null && cur.right === null) {
        return deepth;
      }
  
      if (cur.left) {
        queue.push(cur.left);
      }
  
      if (cur.right) {
        queue.push(cur.right);
      }
    }

    deepth++;
  }

  return deepth;
};
// @lc code=end
