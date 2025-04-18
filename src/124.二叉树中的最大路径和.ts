import { TreeNode, createTree } from './BinaryTree';


/**
 * 递归 + 后序遍历，从叶子节点往上找
 * 
 * 思路：选择一个节点，该节点处于路径中，有 2 种情况：
 * 1. 该节点是顶节点，那么路径就是：左 + 中 + 右
 * 2. 该节点非顶节点，那么路径经过其 左/右 其中一个节点（或者谁都不经过，该节点是路径端点）
 */
function maxPathSum(root: TreeNode | null): number {
  // 注意：
  let max = -Infinity;

  const traverse = (node: TreeNode | null) => {
    if (!node) {
      return 0;
    }

    // 左节点最大和（如果左节点和小于0，还不如不选，设置为 0 相当于剔除左节点路径）
    const left = Math.max(traverse(node.left), 0);
    // 右节点最大和（同上）
    const right = Math.max(traverse(node.right), 0);

    // 经过当前点的最大路径和（包含 顶点/非顶点 2种情况）
    max = Math.max(max, left + node.val + right);

    // 经过了当前节点，还要递归返给上层，路径不能分叉，所以只可选左右其中一个分支
    return node.val + Math.max(left, right);
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
