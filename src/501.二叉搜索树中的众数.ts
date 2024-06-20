import { createTree, TreeNode } from "./BinaryTree";

function findMode(root: TreeNode | null): number[] {
  let count: number = 0;
  let max: number = 0;
  let prev: TreeNode | null = null;
  let r: number[] = [];

  const traverse = (node: TreeNode | null) => {
    if (!node) {
      return;
    }

    traverse(node.left);

    // 刚开始，count = 1
    if (prev === null) {
      count = 1;
    }
    // 相邻2个数相等，当前数值数量 +1
    else if (prev.val === node.val) {
      count++;
    }
    // 相邻2个数不等，当前数值数量 = 1
    else {
      count = 1;
    }

    // 可能有多个众数，push 进去
    if (count === max) {
      r.push(node.val);
    }

    // 如果有更多的数，清空/更新 数组 和 max
    if (count > max) {
      max = count;
      r = [];
      r.push(node.val);
    }

    // 记录上一个节点
    prev = node;

    traverse(node.right);
  };

  traverse(root);

  return r;
}

// const tree = createTree([1, null, 2, null, null, 2]);
const tree = createTree([1, 0, 1, 0, 0, 1, 1, 0]);
const r = findMode(tree);
console.log(r);

export {};
