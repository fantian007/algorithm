import { createTree, TreeNode } from "./BinaryTree";

/**
 * 层序遍历
 * 队列，先进先出，队列 length 固定每层数量 + for 循环 遍历
 */
function levelOrder(root: TreeNode | null): number[][] {
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

  return r;
}

const tree = createTree([1, 2, 3, null, 5, null, 4]);
const r = levelOrder(tree);
console.log(r);

export {};
