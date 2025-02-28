import { TreeNode, createTree } from "./BinaryTree";

function isSymmetric(root: TreeNode | null): boolean {
  if (!root) {
    return true;
  }

  // 递归法
  const compare = (node1: TreeNode | null, node2: TreeNode | null): boolean => {

    // 边界条件
    if (!node1 && !node2) {
      return true;
    } else if (!node1 || !node2) {
      return false;
    } else if (node1.val !== node2.val) {
      return false;
    }
    // 单层递归逻辑
    else {
      return compare(node1.left, node2.right) && compare(node1.right, node2.left);
    }
  }

  return compare(root.left, root.right);
}

const tree = createTree([1, 2, 2, 3, 4, 4, 3]);
// const tree = createTree([1, 2, 2, null, 3, null, 3]);
// const tree = createTree([1, 0]);

const r = isSymmetric(tree);
console.log(r);

export { };
