import { TreeNode } from "./BinaryTree";

/**
 * 递归法(简化写法)
 */
function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  // 由于共用 前序数组，所以先判断中序数组长度
  if (inorder.length === 0 || preorder.length === 0) return null;

  const c = preorder.shift();
  const i = inorder.findIndex(f => f === c);
  const l = inorder.slice(0, i);
  const r = inorder.slice(i + 1);

  return new TreeNode(c, buildTree(preorder, l), buildTree(preorder, r));
};

const r = buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]);
console.log(r);

export { };
