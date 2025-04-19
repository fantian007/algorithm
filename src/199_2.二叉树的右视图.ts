import { createTree, TreeNode } from "./BinaryTree";

/**
 * 右视图，取层序遍历每层的最后一个数
 */
function rightSideView(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }

  const r: number[][] = [];
  const queue: TreeNode[] = [root];

  while (queue.length) {
    const len = queue.length;
    const curLevel = [];

    for (let i = 0; i < len; i++) {
      const node = queue.shift();

      curLevel.push(node.val);

      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }

    r.push(curLevel);
  }

  // return r.map(m => m.at(-1));
  return r.flatMap((f) => f.at(-1));
}

const tree = createTree([1, 2, 3, 4]);
const r = rightSideView(tree);
console.log(r);

export {};
