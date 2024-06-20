import { createTree, TreeNode } from "./BinaryTree";

function largestValues(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }

  const queue: TreeNode[] = [root];
  const r: number[][] = [];

  while (queue.length) {
    const len = queue.length;
    const curLevel: number[] = [];

    for (let i = 0; i < len; i++) {
      const node = queue.shift();

      curLevel.push(node.val);

      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }

    r.push(curLevel);
  }

  // 二叉树层序遍历，每行找最大值
  return r.map((f) => Math.max(...f));
}

const tree = createTree([1, 2, 3, null, 5, null, 4]);
const r = largestValues(tree);
console.log(r);

export {};
