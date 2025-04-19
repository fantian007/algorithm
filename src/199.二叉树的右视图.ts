import { createTree, TreeNode } from "./BinaryTree";

/**
 * 右视图，取层序遍历每层的最后一个数
 */
function rightSideView(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }

  const r: number[] = [];
  const queue: TreeNode[] = [root];

  while (queue.length) {
    const len = queue.length;

    for (let i = 0; i < len; i++) {
      const node = queue.shift();

      // 只收集每层的最后一个节点
      if (i === len - 1) {
        r.push(node.val);
      }

      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }

  return r;
}

const tree = createTree([1, 2, 3, 4]);
const r = rightSideView(tree);
console.log(r);

export {};
