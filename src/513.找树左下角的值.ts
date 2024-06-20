import { createTree, TreeNode } from "./BinaryTree";

// 迭代法
function findBottomLeftValue(root: TreeNode | null): number {
  if (!root) {
    return 0;
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

  // 层序遍历，最后一层最左侧的值
  return r.slice(-1).flat()[0];
}

const tree = createTree([1, 2, 3, 4, 5, 6]);
const r = findBottomLeftValue(tree);
console.log(r);

export {};
