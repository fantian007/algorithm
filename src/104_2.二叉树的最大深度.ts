import { TreeNode } from './BinaryTree';

/**
 * 通过子树的高度倒推（递归）
 * 1. 确定函数入参+返回值
 * 2. 确定终止递归条件
 * 3. 单层递归逻辑
 */
function maxDepth(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
