import { createTree, TreeNode } from "./BinaryTree";

function trimBST(
  root: TreeNode | null,
  low: number,
  high: number
): TreeNode | null {
  if (!root) {
    return null;
  }

  // 将 root 定位到 [low, high] 区内
  // 因为最后要返回 root, 所以 root 一定要满足条件
  while (root) {
    if (root.val < low) {
      root = root.right;
    } else if (root.val > high) {
      root = root.left;
    } else {
      break;
    }
  }

  let cur = root;
  while (cur) {
    // 注意下面是 while
    while (cur.left && cur.left.val < low) {
      cur.left = cur.left.right;
    }

    cur = cur.left;
  }

  cur = root;

  while (cur) {
    // 注意下面是 while
    while (cur.right && cur.right.val > high) {
      cur.right = cur.right.left;
    }

    cur = cur.right;
  }

  return root;
}

// const tree = createTree([3, 1, 4, null, 2]);
// const r = trimBST(tree, 3, 4);

const tree = createTree([3]);
const r = trimBST(tree, 2, 2);

console.log(r);

export {};
