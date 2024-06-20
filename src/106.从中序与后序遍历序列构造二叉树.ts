import { createTree, TreeNode } from "./BinaryTree";

/**
 * 递归法
 * 1. 后序最后一个元素是整棵树的根节点
 * 2. 用根节点分割中序数组，可拆成 [左子树中序遍历，根节点，右子树中序遍历]
 * 3. 取左子树中序数组的大小，截取后序遍历数组前面相同大小，截取结果是左子树的后序遍历，后续遍历剩余元素是右子树的后序遍历
 * 4. 至此，我们有 1 个根节点和 左子树的中序遍历，左子树的后序遍历；右子树的中序遍历，右子树的后序遍历 4个 数组
 * 5. 左子树的中序、后序数组 又可以 按照上述逻辑 传入递归处理；右子树同理
 * 6. 递归返回值是子树的根节点
 * 7. 根节点.left = 左子树递归结果
 * 8. 根节点.right = 右子树递归结果
 */
function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  if (postorder.length === 0) {
    return null;
  }

  const last = postorder.pop();
  const root = new TreeNode(last);

  if (postorder.length === 0) {
    return root;
  }

  const center = inorder.findIndex(f => f === last);
  const inorderLeft = inorder.slice(0, center);
  const inorderRight = inorder.slice(center + 1, inorder.length);

  const postorderLeft = postorder.slice(0, inorderLeft.length);
  const postorderRight = postorder.slice(inorderLeft.length, postorder.length);

  root.left = buildTree(inorderLeft, postorderLeft);
  root.right = buildTree(inorderRight, postorderRight);

  return root;
}

const r = buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3]);
console.log(r);

export {};
