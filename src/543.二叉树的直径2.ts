import { TreeNode } from './BinaryTree';

let maxDeepth = 0;

const calcMaxDeepth = (root: TreeNode) => {
  if (root === null) {
    return 0;
  }

  const l = calcMaxDeepth(root.left);
  const r = calcMaxDeepth(root.right);

  maxDeepth = Math.max(maxDeepth, l + r);

  return Math.max(l, r) + 1;
}

function diameterOfBinaryTree(root: TreeNode | null): number {
  calcMaxDeepth(root);

  return maxDeepth;
};
