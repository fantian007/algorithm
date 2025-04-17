import { TreeNode, createTree } from "./BinaryTree";

/**
 * @see https://leetcode.cn/problems/flatten-binary-tree-to-linked-list/solutions/17274/xiang-xi-tong-su-de-si-lu-fen-xi-duo-jie-fa-by--26/?envType=study-plan-v2&envId=top-interview-150
 * 递归
 * 
 * 思路：
 * 1. 先序遍历，顺序：中左右，整体上先处理 root, 然后左子树、右子树
 * 2. 所有节点都放右侧，那么将左子树挂右侧
 * 3. 处理完左子树，再处理右子树，想到将 右子树挂左子树最后一个右叶子节点下，由于左子树处理时，也要遵循中左右，右子树不能挂到该节点的 left 下，要挂到 right 下
 * 4. 现在整个 root.right 还未被打平，所以递归处理 root.right
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

    // 暂存左右节点
    const _l = root.left;
    const _r = root.right;

    // 左节点设置 null
    // 将左节点放右节点位置，然后将右节点放到左子树的最后一个右节点 的 right 位置，然后从 root.right 继续递归处理
    root.left = null;
    root.right = _l;

    // 找到左侧最后一个节点 p
    let p = root.right;
    while (p.right) {
      p = p.right;
    }

    // 将原先的右节点挂载到 p.right
    p.right = _r;

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
