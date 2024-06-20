/*
 * @lc app=leetcode.cn id=144 lang=typescript
 *
 * [144] 二叉树的前序遍历(非递归，迭代法)
 */
import { TreeNode, createTree } from "./BinaryTree";

function preorderTraversal(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }

  const stack: TreeNode[] = [root];
  const r: number[] = [];

  while (stack.length) {
    const cur = stack.pop();

    if (!cur) {
      r.push(stack.pop().val);
      continue;
    }

    cur.right && stack.push(cur.right);
    cur.left && stack.push(cur.left);

    stack.push(cur);
    stack.push(null);
  }

  return r;
}
// @lc code=end

const tree = createTree([1, 3, 2, 5, 4, 6]);
const r = preorderTraversal(tree);
console.log(r);

export {};
