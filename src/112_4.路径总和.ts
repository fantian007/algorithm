import { createTree, TreeNode } from "./BinaryTree";

// [当前节点，根节点到当前节点的路径和]
type Item = [TreeNode, number];

// 层序迭代
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) {
    return false;
  }

  const queue: Item[] = [[root, root.val]];

  while (queue.length) {
    const len = queue.length;

    for (let i = 0; i < len; i++) {
      const [node, sum] = queue.shift();

      if (!node.left && !node.right && sum === targetSum) {
        return true;
      }

      node.left && queue.push([node.left, sum + node.left.val]);
      node.right && queue.push([node.right, sum + node.right.val]);
    }
  }

  return false;
}

// const tree = createTree([1, 2, 3, 4, 5, 6]);
const tree = createTree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
const r = hasPathSum(tree, 8);
console.log(r);

export {};
