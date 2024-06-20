import { createTree, TreeNode } from "./BinaryTree";

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  // 二叉树遍历过程中，如果不需要同时遍历左右子树，那么逻辑可以很简单
  while (root !== null) {
    if (root.val < val) root = root.right;
    else if (root.val > val) root = root.left;
    else return root;
  }

  return null;
}

const tree1 = createTree([4, 2, 7, 1, 3]);
const r = searchBST(tree1, 2);
console.log(r);

export {};
