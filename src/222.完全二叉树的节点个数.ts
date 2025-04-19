import { createTree, TreeNode } from "./BinaryTree";

function countNodes(root: TreeNode | null): number {
  if (!root) return 0;

  // 后序遍历
  return countNodes(root.left) + countNodes(root.right) + 1;
};

const tree = createTree([1, 2, 3, 4, 5, 6]);
const r = countNodes(tree);
console.log(r);

export { };
