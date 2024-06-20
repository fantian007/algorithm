import { createTree, TreeNode } from "./BinaryTree";

// 迭代法
function convertBST(root: TreeNode | null): TreeNode | null {
  if (!root) {
    return null;
  }

  let pre = 0;

  const queue = [];
  let cur = root;

  while (queue.length || cur) {
    if (cur) {
      queue.push(cur);

      cur = cur.right;
    } else {
      const node = queue.pop();

      // 处理
      node.val = pre + node.val;
      pre = node.val;

      cur = node.left;
    }
  }

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
