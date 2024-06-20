import { createTree, TreeNode } from "./BinaryTree";

function minDepth(root: TreeNode | null): number {
  // 节点不存在，返回高度 0
  if (!root) {
    return 0;
  }

  // 节点存在，子节点不存在，返回高度 1
  if (!root.left && !root.right) {
    return 1;
  }

  // 有一侧节点存在，返回该侧子树高度 + 1（当前节点）
  if (root.left && !root.right) {
    return minDepth(root.left) + 1;
  }
  if (root.right && !root.left) {
    return minDepth(root.right) + 1;
  }

  // 如果左右节点都存在，返回较小的子树高度 + 1
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
}

const tree = createTree([1, 2, 3, 4, 5]);
// const tree = new TreeNode(2);
// tree.right = new TreeNode(3);
// tree.right.right = new TreeNode(4);
// tree.right.right.right = new TreeNode(5);
// tree.right.right.right.right = new TreeNode(6);

const r = minDepth(tree);
console.log(r);

export {};
