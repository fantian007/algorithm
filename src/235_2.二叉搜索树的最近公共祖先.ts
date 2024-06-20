import { createTree, TreeNode } from "./BinaryTree";

// 二叉搜索树，公共祖先节点值一定在 [p.val, q.val] 区间内
function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (!root) {
    return null;
  }

  // 如果当前节点值在区间左边，说明当前节点值太小，那么 遍历右子树（从左往右 -》 从小到大）
  if (root.val < p.val && root.val < q.val) {
    return lowestCommonAncestor(root.right, p, q);
  }

  // 同上
  if (root.val > p.val && root.val > q.val) {
    return lowestCommonAncestor(root.left, p, q);
  }

  // 在区间内，直接返回
  return root;
}

const tree = createTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]);
const r = lowestCommonAncestor(tree, tree.left, tree.right);
console.log(r);

export {};
