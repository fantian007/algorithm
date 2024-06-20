import { TreeNode, createTree } from "./BinaryTree";

function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) {
    return root;
  }

  // 左右节点交换（该句放到最前面就是前序遍历，可以放中间/最后，就是中序、后序遍历）
  [root.left, root.right] = [root.right, root.left];

  // 左子树递归交换
  invertTree(root.left);
  // 右子树递归交换
  invertTree(root.right);

  return root;
}

const tree = createTree([1, 2, 3, 4, 5]);

const r = invertTree(tree);
console.log(r);

export {};
