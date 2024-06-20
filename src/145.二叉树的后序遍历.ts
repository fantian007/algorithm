import { createTree, TreeNode } from "./BinaryTree";


/**
 * 递归，左右中
 */
function postorderTraversal(root: TreeNode | null): number[] {
  const res: number[] = [];

  if (!root) {
    return [];
  }

  res.push(...postorderTraversal(root.left));
  res.push(...postorderTraversal(root.right));
  res.push(root.val);

  return res;
};

const r = postorderTraversal(createTree([1, 3, 2, 5, 4, 6]));
console.log(r);

export {};
