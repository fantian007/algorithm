import { createTree, TreeNode } from "./BinaryTree";

/**
 * 标记法，左中右
 */
function inorderTraversal(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }

  const stack: TreeNode[] = [root];
  const r: number[] = [];

  while (stack.length) {
    const cur = stack.pop();

    if (!cur) {
      r.push(stack.pop().val);
      // 为了不重复将当前节点的右节点放入栈，continue 后从栈里面弹出当前节点的右节点
      continue;
    }

    cur.right && stack.push(cur.right);

    stack.push(cur);
    // 标记，当前节点（中节点）的后面放一个 null
    stack.push(null);

    cur.left && stack.push(cur.left);
  }

  return r;
}

const r = inorderTraversal(createTree([1, 3, 2, 5, 4, 6]));
console.log(r);

export {};
