import { createTree, TreeNode } from "./BinaryTree";

// 递归
function findBottomLeftValue(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  let max: number | undefined;
  let maxDeep = 0;

  // 递归 + 当前节点深度
  const traverse = (root: TreeNode, deep: number) => {
    // 叶子节点
    if (!root.left && !root.right) {
      // 如果更深，则记录最大深度和值
      if (deep > maxDeep) {
        maxDeep = deep;
        max = root.val;
      }
    }

    root.left && traverse(root.left, deep + 1);
    root.right && traverse(root.right, deep + 1);

    // 和上面一样，只不过 回溯 的过程更清楚
    // if (root.left) {
    //   deep += 1;
    //   traverse(root.left, deep);
    //   deep -= 1;
    // }

    // if (root.right) {
    //   deep += 1;
    //   traverse(root.right, deep);
    //   deep -= 1;
    // }
  };

  traverse(root, 1);

  return max;
}

const tree = createTree([1, 2, 3, 4, 5, 6, 7, 8]);
const r = findBottomLeftValue(tree);
console.log(r);

export {};
