import { createTree, TreeNode } from "./BinaryTree";

function inorderTraversal(root: TreeNode | null): number[] {
  const res: number[] = [];

  if (!root) {
    return res;
  }

  res.push(...inorderTraversal(root.left));
  res.push(root.val);
  res.push(...inorderTraversal(root.right));

  return res;
}

const tree = createTree([1, 3, 2, 5, 4, 6]);
const r = inorderTraversal(tree);
console.log(r);

export {};
