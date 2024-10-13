import { TreeNode, createTree } from './BinaryTree';


/**
 * 递归 + 后序遍历，从叶子节点往上找
 * 最大路径和：左子树最大路径和 + 当前节点值 + 右子树最大路径和
 * 当前操作节点的路径，只能选择左右其中一个分支，选较大的分支
 */
function maxPathSum(root: TreeNode | null): number {
  let max = -Infinity;

  const traverse = (node: TreeNode | null) => {
    if (!node) {
      return 0;
    }

    // 左节点最大和（如果左节点和小于0，还不如不选，设置为 0 相当于剔除左节点路径）
    const left = Math.max(traverse(node.left), 0);
    // 右节点最大和（同上）
    const right = Math.max(traverse(node.right), 0);

    // 当前节点是顶层节点，还必须处于路径中，那只有一条路径：只能是 左（最大）+ 当前节点 + 右（最大）
    max = Math.max(max, left + node.val + right);

    // 选择左右其中较大分支
    const n = node.val + Math.max(left, right);
    return n;
  }

  traverse(root);

  return max;
};

const tree = createTree([0]); // 0
// const tree = createTree([1, 2, 3]); // 6
// const tree = createTree([-10, 9, 20, null, null, 15, 7]); // 42
const r = maxPathSum(tree);
console.log(r);

export { }
