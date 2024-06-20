import { createTree, TreeNode } from "./BinaryTree";

function countNodes(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  const queue: TreeNode[] = [root];
  const r: number[][] =[];

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

  return r.flat().length;
}

const tree = createTree([1, 2, 3, 4, 5, 6]);
const r = countNodes(tree);
console.log(r);

export {};
