import { createTree, TreeNode } from "./BinaryTree";

// 递归
// 由 112_2 简化而来
// root - 当前节点 到根节点 的路径和（不将当前节点值算在内）
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) {
    return false;
  }

  if (!root.left && !root.right) {
    return targetSum === root.val;
  }

  // 左子树 || 右子树
  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  );
}

const tree = createTree([1, 2, 3, 4, 5, 6]);
// const tree = createTree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
const r = hasPathSum(tree, 8);
console.log(r);

export {};
