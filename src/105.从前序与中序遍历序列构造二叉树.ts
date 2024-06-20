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
  if (preorder.length === 0) {
    return null;
  }

  const first = preorder.shift();

  const root = new TreeNode(first);

  if (preorder.length === 0) {
    return root;
  }

  const center = inorder.findIndex(f => f === first);
  const inorderLeft = inorder.slice(0, center);
  const inorderRight = inorder.slice(center + 1, inorder.length);

  const preorderLeft = preorder.slice(0, inorderLeft.length);
  const preorderRight = preorder.slice(inorderLeft.length, preorder.length);

  root.left = buildTree(preorderLeft, inorderLeft);
  root.right = buildTree(preorderRight, inorderRight);

  return root;
}

const r = buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]);
console.log(r);

export {};
