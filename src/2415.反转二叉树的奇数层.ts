import { createTree, TreeNode } from "./BinaryTree";

// 层序遍历 -》 将奇数层的值反转 -》重新给节点赋值（注意：节点不翻转，只反转值，之后重新给节点赋值）
function reverseOddLevels(root: TreeNode | null): TreeNode | null {
  if (!root) {
    return null;
  }

  const queue: TreeNode[] = [root];
  let r: TreeNode[][] = [];

  while (queue.length) {
    const len = queue.length;
    const curLevel: TreeNode[] = [];

    for (let i = 0; i < len; i++) {
      const node = queue.shift();

      curLevel.push(node);

      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }

    r.push(curLevel);
  }

  for (let i = 0; i < r.length; i++) {
    // 奇数层
    if (i % 2 !== 0) {
      const nodes = r[i];
      const len = nodes.length;

      // 值数组反转
      const newVals = nodes.map((m) => m.val).reverse();

      // 给节点重新赋值
      for (let j = 0; j < len; j++) {
        nodes[j].val = newVals[j];
      }
    }
  }

  return root;
}

const tree = createTree([2, 3, 5, 8, 13, 21, 34]);
const r = reverseOddLevels(tree);
console.log(r);

export {};
