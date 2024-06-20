import { createTree, TreeNode } from "./BinaryTree";

// 迭代法
function findMode(root: TreeNode | null): number[] {
  let count: number = 0;
  let max: number = 0;
  let prev: TreeNode | null = null;
  let r: number[] = [];

  const queue: TreeNode[] = [];
  let cur: TreeNode = root;

  while (cur || queue.length) {
    if (cur) {
      queue.push(cur);

      cur = cur.left;
    } else {
      cur = queue.pop();

      if (!prev) {
        count = 1;
      } else if (prev.val === cur.val) {
        count++;
      } else {
        count = 1;
      }

      if (count === max) {
        r.push(cur.val);
      }

      if (count > max) {
        max = count;
        r = [];
        r.push(cur.val);
      }

      prev = cur;
      cur = cur.right;
    }
  }

  return r;
}

// const tree = createTree([1, null, 2, null, null, 2]);
const tree = createTree([1, 0, 1, 0, 0, 1, 1, 0]);
const r = findMode(tree);
console.log(r);

export {};
