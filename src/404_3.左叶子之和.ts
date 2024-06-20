import { createTree, TreeNode } from "./BinaryTree";

// 迭代法
function sumOfLeftLeaves(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  const queue: TreeNode[] = [root];
  const r: number[] = [];

  while (queue.length) {
    const len = queue.length;

    for (let i = 0; i < len; i++) {
      const node = queue.shift();

      // 左叶子，通过2层判断来保留父节点的信息
      if (node.left && !node.left.left && !node.left.right) {
        r.push(node.left.val);
      }

      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }

  return r.reduce((a, b) => a + b, 0);
}

const tree = createTree([1, 2, 3, 4, 5, 6]);
const r = sumOfLeftLeaves(tree);
console.log(r);

export {};
