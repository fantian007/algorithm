import { createTree, TreeNode } from "./BinaryTree";

// 迭代法 + 中序遍历
function getMinimumDifference(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  let prev = null;
  let min = Infinity;

  const traverse = (node: TreeNode | null): void => {
    if (!node) {
      return;
    }

    traverse(node.left);

    if (prev) {
      min = Math.min(min, Math.abs(node.val - prev.val));
    }
    // 记录上一个节点，递归处理逻辑要写一起
    prev = node;

    traverse(node.right);
  };

  traverse(root);

  return min;
}

const tree1 = createTree([4, 2, 6, 1, 3]);
// const tree1 = createTree([1, 0, 48, null, null, 12, 49]);
// const tree1 = createTree([1, null, 2]);
const r = getMinimumDifference(tree1);
console.log(r);

export {};
