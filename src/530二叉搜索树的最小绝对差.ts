import { createTree, TreeNode } from "./BinaryTree";

// 迭代法 + 中序遍历
function getMinimumDifference(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  let min = Infinity;
  let prev = null;
  let cur: TreeNode = root;
  const queue: TreeNode[] = [];

  while (cur || queue.length) {
    if (cur) {
      queue.push(cur);

      cur = cur.left;
    } else {
      cur = queue.pop();

      // 计算最小差值
      if (prev) {
        min = Math.min(min, Math.abs(prev.val - cur.val));
      }

      prev = cur;

      cur = cur.right;
    }
  }

  return min;
}

const tree1 = createTree([4, 2, 6, 1, 3]);
const r = getMinimumDifference(tree1);
console.log(r);

export {};
