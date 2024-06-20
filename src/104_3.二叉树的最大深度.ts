import { createTree, TreeNode } from "./BinaryTree";

// 层序遍历的数组的大小就是深度
function maxDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  const r: number[][] = [];
  const queue: TreeNode[] = [root];

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

  return r.length;
}

const tree = createTree([3, 9, 20, null, null, 15, 7]);
const r = maxDepth(tree);
console.log(r);

export {};
