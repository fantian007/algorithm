import { createTree, TreeNode } from "./BinaryTree";

let max = Number.MIN_SAFE_INTEGER;

function isValidBST(root: TreeNode | null): boolean {
  if (!root) {
    return true;
  }

  const left = isValidBST(root.left);

  // 中间节点要大于左子树所有节点值，所以要用中序遍历
  if (max >= root.val) {
    return false;
  }
  max = root.val;

  const right = isValidBST(root.right);

  return left && right;
}

// const tree1 = createTree([0, -1]);
// const tree1 = createTree([2, 1, 3]);
// const tree1 = createTree([5, 1, 4]);
// const tree1 = createTree([2, 2, 2]);
// const tree1 = createTree([5, 1, 4, null, null, 3, 6]);
const tree1 = createTree([5, 4, 6, null, null, 3, 7]);
const r = isValidBST(tree1);
console.log(r);

export {};
