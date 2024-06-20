import { TreeNode, createTree } from "./BinaryTree";

function isSymmetric(root: TreeNode | null): boolean {
  if (!root) {
    return true;
  }

  // 递归法
  const compare = (left: TreeNode | null, right: TreeNode | null): boolean => {
    // 边界条件
    if (left && !right) {
      return false;
    } else if (!left && right) {
      return false;
    } else if (!left && !right) {
      return true;
    } else if (left.val !== right.val) {
      return false;
    }
    // 单层递归逻辑
    else {
      // 外侧节点
      const outSide = compare(left.left, right.right);
      // 内侧节点
      const inSide = compare(left.right, right.left);

      return outSide && inSide;
    }
  };

  return compare(root.left, root.right);
}

const tree = createTree([1, 2, 2, 3, 4, 4, 3]);
// const tree = createTree([1, 2, 2, null, 3, null, 3]);
// const tree = createTree([1, 0]);

const r = isSymmetric(tree);
console.log(r);

export {};
