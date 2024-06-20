import { createTree, TreeNode } from "./BinaryTree";

// 递归法，返回删除了特定节点的子树的根节点
function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  if (!root) {
    return null;
  }

  if (root.val === key) {
    if (!root.left && !root.right) {
      root = null;
      return root;
    } else if (!root.left && root.right) {
      const r = root.right;
      root = null;
      return r;
    } else if (root.left && !root.right) {
      const r = root.left;
      root = null;
      return r;
    }
    // 左右子树都存在，将左子树挂到右子树的最左节点，右节点上移
    else {
      let cur = root.right;

      while (cur.left) {
        cur = cur.left;
      }

      cur.left = root.left;

      const r = root.right;
      root = null;
      return r;
    }
  }

  if (root.val > key) root.left = deleteNode(root.left, key);
  if (root.val < key) root.right = deleteNode(root.right, key);

  return root;
}

// const tree = createTree([5, 3, 6, 2, 4, null, 7]);
// const r = deleteNode(tree, 5);
// const r = deleteNode(tree, 3);
// const r = deleteNode(tree, 7);

// const tree = createTree([0]);
// const r = deleteNode(tree, 0);

const tree = createTree([50, 30, 70, null, 40, 60, 80]);
const r = deleteNode(tree, 50);

console.log(r);

export {};
