import { createTree, TreeNode } from "./BinaryTree";

function averageOfLevels(root: TreeNode | null): number[] {
  const r: number[][] = [];
  // const s: number[] = [];
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
    // s.push(curLevel.reduce((a, b) => a + b, 0) / len);
  }

  // 层序遍历，每层求平均值
  return r.flatMap((f) => f.reduce((a, b) => a + b, 0) / f.length);
  // return s;
}

const tree = createTree([3, 9, 20, null, null, 15, 7]);
const r = averageOfLevels(tree);
console.log(r);

export {};
