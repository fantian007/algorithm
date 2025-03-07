import { TreeNode } from "./BinaryTree";

/**
 * 递归法
 */
function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (preorder.length === 0) return null;

  const c = preorder.shift();
  const i = inorder.findIndex(f => f === c);
  const l = inorder.slice(0, i);
  const r = inorder.slice(i + 1);

  const root = new TreeNode(c);

  if (l.length) {
      root.left = buildTree(preorder, l);
  }

  if (r.length) {
      root.right = buildTree(preorder, r);
  }

  return root;
};

const r = buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]);
console.log(r);

export {};
