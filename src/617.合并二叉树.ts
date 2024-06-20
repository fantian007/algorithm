import { createTree, TreeNode } from "./BinaryTree";

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

  // 合并到 roo1 上（root2 也行），这句话放到不同位置，对应前中后序遍历
  root1.val += root2.val;

  root1.left = mergeTrees(root1.left, root2.left);
  root1.right = mergeTrees(root1.right, root2.right);

  return root1;
}

const tree1 = createTree([1, 3, 2, 5]);
const tree2 = createTree([2, 1, 3, null, 4, null, 7]);
const r = mergeTrees(tree1, tree2);
console.log(r);

export {};
