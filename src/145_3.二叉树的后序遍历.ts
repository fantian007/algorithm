import { createTree, TreeNode } from "./BinaryTree";

/**
 * 迭代，左右中
 */
function postorderTraversal(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }

  const stack: TreeNode[] = [root];
  const r: number[] = [];

  while (stack.length) {
    const cur = stack.pop();

    if (!cur) {
      r.push(stack.pop().val);
      continue;
    }

    stack.push(cur);
    stack.push(null);

    cur.right && stack.push(cur.right);
    cur.left && stack.push(cur.left);
  }

  return r;
}

const r = postorderTraversal(createTree([1, 3, 2, 5, 4, 6]));
console.log(r);

export {};
