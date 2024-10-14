import { createTree, TreeNode } from "./BinaryTree";

/**
 * 迭代法 + 中序遍历
 * 二叉搜索树：右 > 中 > 左，一个节点的值大于左侧所有的值，小于右侧所有的值
 * 所以遍历二叉搜索树，应该使用【中序遍历】，遍历结果就是从小到大的顺序
 * 然后依次计算中序遍历相邻的值的最小差值即可
 */
function getMinimumDifference(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  let prev = null;
  let min = Infinity;

  const traverse = (node: TreeNode | null): void => {
    if (!node) {
      return;
    }

    traverse(node.left);

    // 左子树已处理完毕，会得到左子树的最小值 和 一个 prev
    // 然后当前节点再 - prev，更新最小值
    if (prev) {
      min = Math.min(min, node.val - prev.val);
    }
    // 当前节点已处理完，作为 prev
    prev = node;

    // 再处理右子树（右子树第一个节点会减去当前节点，判断是否更新最小值），会得到一个最小值，最终的 prev 虽然有值，但是已经没用了（所有节点计算完毕了，prev 就是最后一个节点，也是最大值）
    traverse(node.right);
  };

  traverse(root);

  return min;
}

const tree1 = createTree([4, 2, 6, 1, 3]);
// const tree1 = createTree([1, 0, 48, null, null, 12, 49]);
// const tree1 = createTree([1, null, 2]);
const r = getMinimumDifference(tree1);
console.log(r);

export {};
