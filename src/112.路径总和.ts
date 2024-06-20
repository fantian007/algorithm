import { createTree, TreeNode } from "./BinaryTree";

// 递归
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) {
    return false;
  }

  let r = false;

  const traverse = (root: TreeNode, path: number[]) => {
    // 叶子节点
    if (!root.left && !root.right) {
      if (!r) {
        r = path.reduce((a, b) => a + b, 0) === targetSum;
      }
    }

    root.left && traverse(root.left, [...path, root.left.val]);
    root.right && traverse(root.right, [...path, root.right.val]);
  };

  traverse(root, [root.val]);

  return r;
}

// const tree = createTree([1, 2, 3, 4, 5, 6]);
const tree = createTree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
const r = hasPathSum(tree, 8);
console.log(r);

export {};
