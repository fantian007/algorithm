import { TreeNode, createTree } from "./BinaryTree";

/**
 * 思路：
 * 1. 构造前序遍历数组
 * 2. 遍历数组，将元素的 left 设置为 null, 将 right 设置为下一个节点
 */
function flatten(root: TreeNode | null): void {
  // 前序遍历，放入数组
  const preorder = (root: TreeNode | null) => {
    if (!root) return [];

    let nodes = [root];

    nodes = nodes.concat(preorder(root.left), preorder(root.right));

    return nodes;
  }

  const nodes = preorder(root);

  // 设置 left = null, right = 下一个节点
  nodes.forEach((node, i) => {
    node.left = null;

    if (i < nodes.length - 1) {
      node.right = nodes[i + 1];
    }
  });
};

const tree = createTree([1, 2, 5, 3, 4, null, 6]);
// const tree = createTree([0]);
flatten(tree);
console.log(tree);

export { }
