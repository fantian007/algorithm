import { createTree, TreeNode } from "./BinaryTree";

/**
 * 迭代，左右中
 * 前序（中左右）-> 调整顺序(中右左) -> 反转(左右中)
 */
function postorderTraversal(root: TreeNode | null): number[] {
  const stack: TreeNode[] = [root];
  const r: number[] = [];

  while (stack.length) {
    const cur = stack.pop();
    r.push(cur.val);

    if (cur.left) {
      stack.push(cur.left);
    }

    if (cur.right) {
      stack.push(cur.right);
    }
  }

  return r.reverse();
}

const r = postorderTraversal(createTree([1, 3, 2, 5, 4, 6]));
console.log(r);

export {};
