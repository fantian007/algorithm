import { createTree, TreeNode } from "./BinaryTree";


function countNodes(root: TreeNode | null): number {
  if (!root) {
      return 0;
  }

  const left = countNodes(root.left);
  const right = countNodes(root.right);

  return left + right + 1;
};

const tree = createTree([1, 2, 3, 4, 5, 6]);
const r = countNodes(tree);
console.log(r);

export {};
