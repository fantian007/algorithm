import { TreeNode } from './BinaryTree';

/**
 * 递归方式
 */
function maxDepth(root: TreeNode | null): number {
  let r = 0;
  let deepth = 0;

  const traverse = (node: TreeNode) => {
    if (!node) {
      // 到达叶子节点时，更新 r
      r = Math.max(r, deepth);
    }

    deepth++;
    traverse(node.left);
    traverse(node.right);
    deepth--;
  }

  traverse(root);

  return r;
};

export { };
