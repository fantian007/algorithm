import { createTree, TreeNode } from "./BinaryTree";

/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     left: _Node | null
 *     right: _Node | null
 *     next: _Node | null
 *     constructor(val?: number, left?: _Node, right?: _Node, next?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function connect(root: TreeNode | null): TreeNode | null {
  if (!root) {
    return null;
  }

  const queue: TreeNode[] = [root];
  const r: TreeNode[][] = [];

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

  // 二叉树层序遍历，每层的左侧节点 next 指向右侧节点
  for (const l of r) {
    const len = l.length;

    for (let i = 0; i < len; i++) {
      if (i < len - 1) {
        l[i].next = l[i + 1];
      }
    }
  }

  return root;
}

const tree = createTree([1, 2, 3, null, 5, null, 4]);
const r = connect(tree);
console.log(r);

export {};
