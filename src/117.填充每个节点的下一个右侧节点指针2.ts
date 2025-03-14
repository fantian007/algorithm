import { TreeNode } from './BinaryTree';

export interface _Node extends TreeNode {
  next: _Node;
}

// 层序遍历
function connect(root: _Node | null): _Node | null {
  if (!root) {
    return null;
  }

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

    // 连接当前层节点
    for (let i = 0; i < curLevel.length - 1; i++) {
      curLevel[i].next = curLevel[i + 1];
    }
  }

  return root;
};