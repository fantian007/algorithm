import { createTree, TreeNode } from "./BinaryTree";

// 二叉树 中序遍历（迭代法）
function traverse(root: TreeNode | null): number[] {
  if (!root) {
    return []
  }

  const queue: TreeNode[] = [];
  let cur = root;
  let r: number[] = [];

  while (cur || queue.length) {
    if (cur) {
      queue.push(cur);
      cur = cur.left;
    } else {
      cur = queue.pop();

      r.push(cur.val);

      cur = cur.right;
    }
  }

  return r;
}

const tree1 = createTree([4, 2, 6, 1, 3]); // 12346
const r = traverse(tree1);
console.log(r);

export { };
