import { createTree, TreeNode } from "./BinaryTree";

const map = new Map<TreeNode, number>();

function rob(root: TreeNode | null): number {
  if (!root) return 0;

  // 缓存，防止重复计算
  // 计算 root 时，计算了 root 的孙子节点，
  // 计算 root 的左右节点时，又把孙子节点算了一遍
  if (map.has(root)) {
    return map.get(root);
  }

  // 不偷当前节点
  const r1 = rob(root.left) + rob(root.right);
  // 偷当前节点
  const r2 =
    root.val +
    // 左节点不偷，左节点的子节点偷
    rob(root.left?.left) +
    rob(root.left?.right) +
    // 右节点不偷，右节点的子节点偷
    rob(root.right?.left) +
    rob(root.right?.right);

  // 取 偷/不偷 的最大值
  const w = Math.max(r1, r2);

  map.set(root, w);

  return w;
}

// const tree = createTree([3, 2, 3, null, 3, null, 1]);
const tree = createTree([3, 4, 5, 1, 3, null, 1]);
const r = rob(tree);
console.log(r);

export {};
