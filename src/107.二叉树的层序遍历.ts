import { createTree, TreeNode } from "./BinaryTree";

/**
 * 层序遍历
 * 队列，先进先出，队列 length 固定每层数量 + for 循环 遍历
 */
function levelOrderBottom(root: TreeNode | null): number[][] {
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

  return r.reverse();
}

const tree = createTree([3, 9, 20, null, null, 15, 7]);
const r = levelOrderBottom(tree);
console.log(r);

export {};
