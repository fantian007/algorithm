import { createTree, TreeNode } from "./BinaryTree";

// 递归
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) {
    return false;
  }

  /**
   * 是否有符合条件的路径
   * @param node - 当前节点
   * @param cnt - 当前节点路径 到 根节点 的路径和 与 targetSum 的差值（减法比加法简单）
   */
  const traverse = (node: TreeNode, cnt: number): boolean => {
    if (!node.left && !node.right) {
      return cnt === 0;
    }

    if (node.left) {
      cnt -= node.left.val;
      if (traverse(node.left, cnt)) return true;
      cnt += node.left.val;
    }

    if (node.right) {
      cnt -= node.right.val;
      if (traverse(node.right, cnt)) return true;
      cnt += node.right.val;
    }

    return false;
  };

  return traverse(root, targetSum - root.val)
}

const tree = createTree([1, 2, 3, 4, 5, 6]);
// const tree = createTree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
const r = hasPathSum(tree, 8);
console.log(r);

export { };
