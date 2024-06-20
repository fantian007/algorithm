import { createTree, TreeNode } from "./BinaryTree";

// 求树深度
const deep = (root: TreeNode | null): number => {
  if (!root) {
    return 0;
  }

  return Math.max(deep(root.left), deep(root.right)) + 1;
};

function isBalanced(root: TreeNode | null): boolean {
  if (!root) {
    return true;
  }

  const left = deep(root.left);
  const right = deep(root.right);

  if (Math.abs(left - right) > 1) {
    return false;
  } else {
    return isBalanced(root.left) && isBalanced(root.right);
  }
}

const tree = createTree([1, 2, 3, 4, 5, 6]);
const r = isBalanced(tree);
console.log(r);

export {};
