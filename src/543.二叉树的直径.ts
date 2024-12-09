import { TreeNode } from './BinaryTree';

const calcMaxDeepth = (root: TreeNode) => {
  if (root === null) {
    return 0;
  }

  return Math.max(calcMaxDeepth(root.left), calcMaxDeepth(root.right)) + 1;
}

const traverse = (root: TreeNode) => {
  if (root === null) {
    return;
  }

  const leftDeepth = calcMaxDeepth(root.left);
  const rightDeepth = calcMaxDeepth(root.right);

  maxDeepth = Math.max(maxDeepth, leftDeepth + rightDeepth);

  traverse(root.left);
  traverse(root.right)
}

let maxDeepth = 0;

function diameterOfBinaryTree(root: TreeNode | null): number {
  traverse(root);

  return maxDeepth;
};
