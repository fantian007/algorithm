import { createTree, TreeNode } from "./BinaryTree";

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

    // 每层节点连接
    for (let i = 0; i < curLevel.length - 1; i++) {
      curLevel[i].next = curLevel[i + 1];
    }

    r.push(curLevel);
  }

  return root;
}

const tree = createTree([1, 2, 3, null, 5, null, 4]);
const r = connect(tree);
console.log(r);

export { };
