import { TreeNode, createTree } from "./BinaryTree";

// 迭代法
function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) {
    return root;
  }

  const queue: TreeNode[] = [root];

  while (queue.length) {
    const len = queue.length;

    for (let i = 0; i < len; i++) {
      const node = queue.shift();

      // 层序遍历，将数组中每个节点的左右节点交换一下即可
      [node.left, node.right] = [node.right, node.left];

      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }

  return root;
}

const tree = createTree([1, 2, 3, 4, 5]);

const r = invertTree(tree);
console.log(r);

export {};
