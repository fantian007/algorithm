import { createTree, TreeNode } from "./BinaryTree";

// 递归 + 回溯
function binaryTreePaths(root: TreeNode | null): string[] {
  if (!root) {
    return [];
  }

  const ret: number[][] = [];

  // 从根节点开始访问，所以要 前序遍历（中左右）
  const traverse = (node: TreeNode, paths: number[]) => {
    // 放入节点
    paths.push(node.val);

    if (!node.left && !node.right) {
      // 左右子节点都不存在，存储路径
      ret.push(paths.slice());
      return;
    }

    if (node.left) {
      // 递归
      traverse(node.left, paths);
      // 回溯节点
      paths.pop();
    }

    if (node.right) {
      // 递归
      traverse(node.right, paths);
      // 回溯节点
      paths.pop();
    }
  };

  // 路径数组，记录路径
  traverse(root, []);

  return ret.map((m) => m.join("->"));
}

const tree = createTree([1, 2, 3, null, 5]);
const r = binaryTreePaths(tree);
console.log(r);

export {};
