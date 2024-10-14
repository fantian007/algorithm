import { createTree, TreeNode } from "./BinaryTree";

/**
 * 二叉树 后序遍历（迭代法）
 * 中右左 遍历之后，反转数组，结果：左右中
 */
function traverse(root: TreeNode | null): number[] {
  if (!root) {
    return []
  }

  const queue: TreeNode[] = [root];
  let r: number[] = [];

  while (queue.length) {
    const node = queue.pop();

    r.push(node.val);

    // 先入 左节点（上面是 pop）
    node.left && queue.push(node.left);
    node.right && queue.push(node.right);
  }

  return r.reverse();
}

const tree1 = createTree([4, 2, 6, 1, 3]); // 13264
const r = traverse(tree1);
console.log(r);

export { };
