import { TreeNode } from './BinaryTree';

function preorderTraversal(root: TreeNode | null): number[] {
  const res: number[] = [];
  
  if (root === null) {
    return [];
  }

  res.push(root.val);
  res.push(...preorderTraversal(root.left));
  res.push(...preorderTraversal(root.right));

  return res;
};

export {};
