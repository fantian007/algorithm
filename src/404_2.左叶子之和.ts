import { createTree, TreeNode } from "./BinaryTree";

function sumOfLeftLeaves(root: TreeNode | null): number {
  // 递归终止
  if (!root) {
    return 0;
  }

  let r: number = 0;

  // 左叶子（root 是父节点，root.left 是叶子节点）
  if (root.left && !root.left.left && !root.left.right) {
    // 不能直接 return root.left.val, root.right 还没有递归呢，可以 return root.left.val + sumOfLeftLeaves(root.right);
    // 或者使用 r 变量做累加

    r = root.left.val;
  }

  // 非左叶子，递归
  return r + sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);
}

const tree = createTree([1, 2, 3, 4, 5, 6]);
const r = sumOfLeftLeaves(tree);
console.log(r);

export {};
