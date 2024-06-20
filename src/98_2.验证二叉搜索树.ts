import { createTree, TreeNode } from "./BinaryTree";

let max = Number.MIN_SAFE_INTEGER;

function isValidBST(root: TreeNode | null): boolean {
  if (!root) {
    return true;
  }

  const queue: TreeNode[] = [];
  let prev: TreeNode | null = null;
  let cur: TreeNode = root;

  // 迭代遍历（中序遍历：左中右）
  while (cur || queue.length) {
    if (cur) {
      queue.push(cur);

      cur = cur.left;
    } else {
      // 当前要处理的节点
      cur = queue.pop();

      // 按左中右 pop 出来，前一个数应该比当前数小（二叉搜索树特性）
      if (prev && cur.val <= prev.val) {
        return false;
      }

      prev = cur;
      cur = cur.right;
    }
  }

  return true;
}

// const tree1 = createTree([0, -1]); // true
// const tree1 = createTree([2, 1, 3]); // true
// const tree1 = createTree([5, 1, 4]); // false
// const tree1 = createTree([2, 2, 2]); // false
// const tree1 = createTree([5, 1, 4, null, null, 3, 6]); // false
const tree1 = createTree([5, 4, 6, null, null, 3, 7]); // false
const r = isValidBST(tree1);
console.log(r);

export {};
