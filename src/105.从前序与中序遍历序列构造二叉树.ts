import { createTree, TreeNode } from "./BinaryTree";

/**
 * 递归法
 * 1. 前序第一个元素是整棵树的根节点
 * 2. 用根节点分割中序数组，可拆成 [左子树中序遍历，根节点，右子树中序遍历]
 * 3. 取左子树中序数组的大小，截取前序遍历数组前面相同大小，截取结果是左子树的前序遍历，前续遍历剩余元素是右子树的前序遍历
 * 4. 至此，我们有 1 个根节点和 左子树的中序遍历，左子树的前序遍历；右子树的中序遍历，右子树的前序遍历 4个 数组
 * 5. 左子树的前序，中序数组 又可以 按照上述逻辑 传入递归处理；右子树同理
 * 6. 递归返回值是子树的根节点
 * 7. 根节点.left = 左子树递归结果
 * 8. 根节点.right = 右子树递归结果
 */

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (!preorder.length) return null;

  const center = preorder.shift();
  // 中节点
  const i = inorder.findIndex(f => f === center);

  // 中节点 分割中序遍历
  const left_inorder = inorder.slice(0, i);
  const right_inorder = inorder.slice(i + 1);
  // 反过来用长度 分割前序遍历
  const left_preorder = preorder.slice(0, left_inorder.length);
  const right_preorder = preorder.slice(left_inorder.length);

  return new TreeNode(center, buildTree(left_preorder, left_inorder), buildTree(right_preorder, right_inorder));
};

const r = buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]);
console.log(r);

export { };
