import { createTree, TreeNode } from "./BinaryTree";

type Item = [TreeNode, number[]];

// 迭代法
function binaryTreePaths(root: TreeNode | null): string[] {
  if (!root) {
    return [];
  }

  // 每个节点，和遍历到当前节点的路径
  const queue: Item[] = [[root, [root.val]]];
  const r: number[][] = [];

  while (queue.length) {
    const len = queue.length;

    for (let i = 0; i < len; i++) {
      const [node, paths] = queue.shift();

      // 无叶子节点，存储路径
      if (!node.left && !node.right) {
        r.push(paths);
      }

      node.left && queue.push([node.left, paths.concat(node.left.val)]);
      node.right && queue.push([node.right, paths.concat(node.right.val)]);
    }
  }

  return r.map((m) => m.join("->"));
}

const tree = createTree([1, 2, 3, null, 5]);
const r = binaryTreePaths(tree);
console.log(r);

export {};
