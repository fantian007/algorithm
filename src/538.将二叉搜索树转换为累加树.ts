import { createTree, TreeNode } from "./BinaryTree";

// 递归法
function convertBST(root: TreeNode | null): TreeNode | null {
  if (!root) {
    return null;
  }

  let pre = 0;

  const traverse = (node: TreeNode | null) => {
    if (!node) {
      return;
    }

    traverse(node.right);

    node.val = pre + node.val;
    pre = node.val;

    traverse(node.left);
  };

  traverse(root);

  return root;
}

const tree = createTree([
  4,
  1,
  6,
  0,
  2,
  5,
  7,
  null,
  null,
  null,
  3,
  null,
  null,
  null,
  8,
]);
const r = convertBST(tree);

console.log(r);

export {};
