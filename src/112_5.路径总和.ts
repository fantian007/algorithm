import { createTree, TreeNode } from "./BinaryTree";

// 递归
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  const traverse = (node: TreeNode | null, path: number[]) => {
    if (!node) {
      return false;
    }
    // 叶子节点
    if (!node.left && !node.right) {
      return (path.reduce((a, b) => a + b, 0) + node.val) === targetSum;
    }

    path.push(node.val);
    return traverse(node?.left, path.slice()) || traverse(node?.right, path.slice());
  }

  return traverse(root, []);
}
// const tree = createTree([1, null, 2]); // false
// const r = hasPathSum(tree, 1);

const tree = createTree([1, -2, -3, 1, 3, -2, null, -1]); // false
const r = hasPathSum(tree, 3);

// const tree = createTree([5, 4, 8, 11, null, 13, 4, 7,3, null, null, null, 1]); // true
// const r = hasPathSum(tree, 22);
console.log(r);

export { };
