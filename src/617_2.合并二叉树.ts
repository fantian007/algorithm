import { createTree, TreeNode } from "./BinaryTree";

// 迭代法
function mergeTrees(
  root1: TreeNode | null,
  root2: TreeNode | null
): TreeNode | null {
  if (!root1) {
    return root2;
  }

  if (!root2) {
    return root1;
  }

  // 2个树节点同时入队
  const queue: TreeNode[] = [root1, root2];

  while (queue.length) {
    // 不需要关注层数，不用提前计算 length；一个循环里面 2 次 shift, 循环会出错
    for (let i = 0; i < queue.length; i++) {
      const node1 = queue.shift();
      const node2 = queue.shift();

      // 将值累加到 root1 上
      node1.val += node2.val;

      // 同位置节点同时入队，取的时候 2 次 shift 一起取出，进行计算
      if (node1.left && node2.left) {
        queue.push(node1.left, node2.left);
      }

      if (node1.left && !node2.left) {
        // 啥都不干
      }

      // 将 root2 值给 root1
      if (!node1.left && node2.left) {
        node1.left = node2.left;
      }

      if (node1.right && node2.right) {
        queue.push(node1.right, node2.right);
      }

      if (node1.right && !node2.right) {
        // 啥都不干
      }

      // 同上
      if (!node1.right && node2.right) {
        node1.right = node2.right;
      }
    }
  }

  return root1;
}

const tree1 = createTree([1, 3, 2, 5]);
const tree2 = createTree([2, 1, 3, null, 4, null, 7]);
const r = mergeTrees(tree1, tree2);
console.log(r);

export {};
