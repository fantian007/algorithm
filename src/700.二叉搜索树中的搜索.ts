import { createTree, TreeNode } from "./BinaryTree";

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  if (!root) {
    return null;
  }

  if (root.val === val) {
    return root;
  }

  if (root.val < val) {
    return searchBST(root.right, val);
  }

  if (root.val > val) {
    return searchBST(root.left, val);
  }
}

const tree1 = createTree([4, 2, 7, 1, 3]);
const r = searchBST(tree1, 2);
console.log(r);

export {};
