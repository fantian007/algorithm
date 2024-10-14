import { createTree, TreeNode } from "./BinaryTree";

// 二叉树 前序遍历（迭代法）
function traverse(root: TreeNode | null): number[] {
  if (!root) {
    return []
  }

  const queue: TreeNode[] = [root];
  let r: number[] = [];

  while (queue.length) {
    const node = queue.pop();

    r.push(node.val);

    // 先入 右节点（上面是 pop）
    node.right && queue.push(node.right);
    node.left && queue.push(node.left);
  }

  return r;
}

const tree1 = createTree([4, 2, 6, 1, 3]); // 42136
const r = traverse(tree1);
console.log(r);

export { };
