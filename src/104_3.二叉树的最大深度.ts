import { createTree, TreeNode } from "./BinaryTree";

// 层序遍历的数组的大小就是深度
function maxDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  let r = 0;
  const queue: TreeNode[] = [root];

  while (queue.length) {
    const len = queue.length;

    for (let i = 0; i < len; i++) {
      const node = queue.shift();

      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }

    // 遍历完每层，+1
    r++;
  }

  return r;
}

const tree = createTree([3, 9, 20, null, null, 15, 7]);
const r = maxDepth(tree);
console.log(r);

export { };
