import { createTree, TreeNode } from "./BinaryTree";

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  if (!root) {
    return [];
  }

  const r: number[][] = [];
  
  const traverse = (node: TreeNode, path: number[]) => {
    const sum = path.reduce((a, b) => a + b, 0);

    if (!node.left && !node.right && sum === targetSum) {
      r.push(path.slice());
    }

    if (node.left) {
      // 放入
      path.push(node.left.val);
      // 递归
      traverse(node.left, path);
      // 回溯
      path.pop();
    }

    if (node.right) {
      path.push(node.right.val);
      traverse(node.right, path);
      path.pop();
    }
  }

  traverse(root, [root.val]);
  
  return r;
}

const tree = createTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, null, 5, 1]);
const r = pathSum(tree, 22);
console.log(r);

export {};
