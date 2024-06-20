import { createTree, TreeNode } from "./BinaryTree";

function minDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  let deep = 0;
  const queue: TreeNode[] = [root];

  while (queue.length) {
    const len = queue.length;
    deep++;

    for (let i = 0; i < len; i++) {
      const node = queue.shift();

      // 层序遍历，左右节点都为 null, 才是叶子节点
      if (!node.left && !node.right) {
        return deep;
      }

      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }

  return deep;
}

// const tree = createTree([1, 2, 3, 4, 5]);
const tree = new TreeNode(2);
tree.right = new TreeNode(3);
tree.right.right = new TreeNode(4);
tree.right.right.right = new TreeNode(5);
tree.right.right.right.right = new TreeNode(6);

const r = minDepth(tree);
console.log(r);

export {};
