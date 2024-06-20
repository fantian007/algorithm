import { createTree, TreeNode } from "./BinaryTree";

// 二叉搜索树，公共祖先节点值一定在 [p.val, q.val] 区间内
function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  while (root) {
    if (root.val > p.val && root.val > q.val) {
      root = root.left;
    } else if (root.val < p.val && root.val < q.val) {
      root = root.right;
    } else {
      return root;
    }
  }
}

const tree = createTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]);
const r = lowestCommonAncestor(tree, tree.left, tree.right);
console.log(r);

export {};
