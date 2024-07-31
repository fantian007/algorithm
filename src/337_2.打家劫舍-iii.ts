import { createTree, TreeNode } from "./BinaryTree";

function rob(root: TreeNode | null): number {
  // 后序遍历，返回值值：当前节点 [偷，不偷] 的金额
  const postOrder = (root: TreeNode): [number, number] => {
    if (!root) {
      return [0, 0];
    }

    const left = postOrder(root.left);
    const right = postOrder(root.right);

    return [
      // 偷当前节点，左右孩子不偷
      left[1] + right[1] + root.val,
      // 不偷当前节点，左右孩子 可以偷/不偷
      Math.max(left[0], left[1]) + Math.max(right[0], right[1]),
    ];
  };

  const r = postOrder(root);

  return Math.max(r[0], r[1]);
}

// const tree = createTree([3, 2, 3, null, 3, null, 1]);
const tree = createTree([3, 4, 5, 1, 3, null, 1]);
const r = rob(tree);
console.log(r);

export {};
