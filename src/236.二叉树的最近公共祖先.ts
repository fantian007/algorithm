import { createTree, TreeNode } from "./BinaryTree";

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (root === p || root === q || root === null) {
    return root;
  }

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  // 有共同父节点
  if (left && right) return root;
  // 左节点是自己
  else if (left) return left;
  // 右节点是自己
  else if (right) return right;
  else return null;
}

const tree = createTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]);
const r = lowestCommonAncestor(tree, tree.left, tree.right);
console.log(r);

export {};
