import { createTree, TreeNode } from "./BinaryTree";

function inorderTraversal(root: TreeNode | null): number[] {
  const stack: TreeNode[] = [];
  const r: number[] = [];

  let cur = root;

  while (cur || stack.length > 0) {
    // 遇到左节点，一直压栈
    if (cur) {
      stack.push(cur);

      cur = cur.left;
    }
    // 左节点为空，先处理当前节点，再将右节点压栈
    else {
      cur = stack.pop();
      r.push(cur.val);

      cur = cur.right;
    }
  }

  return r;
}

const r = inorderTraversal(createTree([1, 3, 2, 5, 4, 6]));
console.log(r);

export {};
