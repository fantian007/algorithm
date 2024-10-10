import { createTree, TreeNode } from "./BinaryTree";

// 递归
// 比较结构：就是相同位置的节点是否存在
// 比较数据：就是比较 val
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (!p && !q) {
    return true;
  }

  if (p && !q) {
    return false;
  }

  if (!p && q) {
    return false;
  }

  if (p.val !== q.val) {
    return false;
  }

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

const tree1 = createTree([1, 2, 3]);
const tree2 = createTree([1, 2, 3]);
const r = isSameTree(tree1, tree2);
console.log(r);

export { };
