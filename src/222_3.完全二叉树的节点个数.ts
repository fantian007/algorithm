import { createTree, TreeNode } from "./BinaryTree";

function countNodes(root: TreeNode | null): number {
  if (!root) return 0;

  // 左子树高度
  let hL = 0;
  // 右子树高度
  let hR = 0;

  // 计算左子树高度
  let p = root.left;
  while (p) {
    hL++;
    p = p.left;
  }

  // 计算右子树高度
  p = root.right;
  while (p) {
    hR++;
    p = p.right;
  }

  /**
   * 如果高度相同，说明左子树是 满二叉树，左子树节点数量: 2^左子树高度，再加上 右子树节点数量
   * 如果高度不同，说明右子树是 满二叉树，右子树节点数量：2^右子树高度，再加上 左子树节点数量
   */
  if (hL === hR) {
    // 1 << n 相当于 2^n
    // + 运算符优先级大于 <<, 注意括号
    return (1 << hL) + countNodes(root.right);
  } else {
    return (1 << hR) + countNodes(root.left);
  }
}

const tree = createTree([1, 2, 3, 4, 5, 6]);
const r = countNodes(tree);
console.log(r);

export {};
