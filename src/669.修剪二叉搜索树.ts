import { createTree, TreeNode } from "./BinaryTree";

function trimBST(
  root: TreeNode | null,
  low: number,
  high: number
): TreeNode | null {
  if (!root) {
    return null;
  }

  if (root.val < low) {
    return trimBST(root.right, low, high);
  }

  if (root.val > high) {
    return trimBST(root.left, low, high);
  }

  root.left = trimBST(root.left, low, high);
  root.right = trimBST(root.right, low, high);

  return root;
}

const tree = createTree([1, 0, 2]);
const r = trimBST(tree, 0, 2);

console.log(r);

export {};
