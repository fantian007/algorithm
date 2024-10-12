import { TreeNode } from './BinaryTree';

export interface _Node extends TreeNode {
  next: _Node;
}

// 层序遍历
function connect(root: _Node | null): _Node | null {
  if (!root) {
    return null;
  }

  const r: _Node[][] = [];
  const queue: _Node[] = [root];

  while (queue.length) {
    const len = queue.length;
    const curLevel: _Node[] = [];

    for (let i = 0; i < len; i++) {
      const node = queue.shift();

      curLevel.push(node);

      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    };

    // 收集每层节点
    r.push(curLevel);
  }

  // 每层节点 next 连接
  for (let i = 0; i < r.length; i++) {
    for (let j = 0; j < r[i].length; j++) {
      r[i][j].next = r[i][j + 1] ?? null;
    };
  };

  return root;
};