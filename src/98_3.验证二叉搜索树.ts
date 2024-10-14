import { createTree, TreeNode } from "./BinaryTree";

/**
 * 二叉搜索树的中序遍历结果应该是：小 -> 大，所以检查中序遍历的结果是否符合即可
 */
function isValidBST(root: TreeNode | null): boolean {
  if (!root) {
    return false;
  }

  const arr: number[] =[];

  const traverse = (node: TreeNode | null) => {
    if (!root) {
      return;  
    }

    node.left && traverse(node.left);
    arr.push(node.val);
    node.right && traverse(node.right);
  }

  traverse(root);

  // 检查数组元素是否递增
  for(let i = 1; i < arr.length; i++) {
    if (arr[i] <= arr[i - 1]) {
      return false;
    }
  };

  return true;
}

// const tree1 = createTree([0, -1]); // true
// const tree1 = createTree([2, 1, 3]); // true
// const tree1 = createTree([5, 1, 4]); // false
// const tree1 = createTree([2, 2, 2]); // false
// const tree1 = createTree([5, 1, 4, null, null, 3, 6]); // false
const tree1 = createTree([5, 4, 6, null, null, 3, 7]); // false
const r = isValidBST(tree1);
console.log(r);

export {};
