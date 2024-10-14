import { createTree, TreeNode } from "./BinaryTree";


/**
 * 迭代法 + 中序遍历
 * 二叉搜索树：右 > 中 > 左，一个节点的值大于左侧所有的值，小于右侧所有的值
 * 所以遍历二叉搜索树，应该使用【中序遍历】，遍历结果就是从小到大的顺序
 * 然后依次计算中序遍历相邻的值的最小差值即可
 */
function getMinimumDifference(root: TreeNode | null): number {
  // 中序遍历结果数组
  let arr: number[] = [];

  const traverse = (node: TreeNode | null) => {
    if (!node) {
      return;
    }

    traverse(node.left);

    arr.push(node.val);

    traverse(node.right);
  }

  traverse(root);

  // 求相邻元素最小差
  let min = Infinity;

  for (let i = 1; i < arr.length; i++) {
    min = Math.min(min, arr[i] - arr[i - 1]);
  };

  return min;
}

const tree1 = createTree([4, 2, 6, 1, 3]);
const r = getMinimumDifference(tree1);
console.log(r);

export { };
