import { TreeNode, createTree } from "./BinaryTree";

/**
 * @see https://leetcode.cn/problems/flatten-binary-tree-to-linked-list/solutions/17274/xiang-xi-tong-su-de-si-lu-fen-xi-duo-jie-fa-by--26/?envType=study-plan-v2&envId=top-interview-150
 * 递归
 */
function flatten(root: TreeNode | null): void {
  if (!root) {
    return;
  }

  // 左节点不存在，处理右节点
  if (!root.left) {
    flatten(root.right);
  } else {
    /**
     * 左节点存在
     * 1. 使用临时变量记录右节点
     * 2. 将左节点挂载到 right
     * 3. 将原先的右节点挂载到左节点子树的最后一个节点（右下角）
     * 4. 递归处理 node.right（下一个节点）
     */
    const right = root.right;
    root.right = root.left;
    root.left = null;

    // 找到左侧最后一个节点 p
    let p = root.right;
    while (p.right) {
      p = p.right;
    }

    // 将原先的右节点挂载到 p.right
    p.right = right;

    // 递归处理下一个节点
    flatten(root.right);
  }
};

const tree = createTree([1, 2, 5, 3, 4, null, 6]);
// const tree = createTree([1, null, 2, null, null, 3]);
// const tree = createTree([0]);
flatten(tree);
console.log(tree);

export { }
