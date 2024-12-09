import { TreeNode } from './BinaryTree';

function minDepth(root: TreeNode | null): number {
  const queue: TreeNode[] = [];

  if (root === null) {
    return 0;
  }

  queue.push(root);
  let deepth = 1;

  while (queue.length) {
    const len = queue.length;

    for (let i = 0; i < len; i++) {
      const cur = queue.shift();

      if (cur.left === null && cur.right === null) {
        return deepth;
      }
  
      if (cur.left) {
        queue.push(cur.left);
      }
  
      if (cur.right) {
        queue.push(cur.right);
      }
    }

    deepth++;
  }

  return deepth;
};
