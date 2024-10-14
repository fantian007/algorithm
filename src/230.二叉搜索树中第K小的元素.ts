import { TreeNode, createTree } from './BinaryTree';

/**
 * 二叉搜索树：中序遍历结果是 小 -> 大，然后取第 K 个元素即可
 */
function kthSmallest(root: TreeNode | null, k: number): number {
  if (!root) {
    return 0;
  }

  const arr: number[] = [];

  const traverse = (node: TreeNode | null) => {
    if (!node) {
      return;
    }


    node.left && traverse(node.left);
    arr.push(node.val);
    node.right && traverse(node.right);
  }

  traverse(root);

  return arr.at(k - 1);
};


const tree = createTree([3, 1, 4, null, 2]);
const r = kthSmallest(tree, 1);
console.log(r);
