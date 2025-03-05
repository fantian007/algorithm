import { TreeNode, createTree } from './BinaryTree';

/**
 * 对二叉树中每个节点进行编号
 * 一个节点编号为 i, 那么左节点编号为 2 * i  1, 右节点编号为 2 * i + 2
 */
function widthOfBinaryTree(root: TreeNode | null): number {
  if (!root) return 0;

  let nodes: [TreeNode, number][] = [[root, 0]];
  let r = 1;

  while (nodes.length) {
    const len = nodes.length;

    // 当前层第一个节点的编号
    let firstNo = nodes.at(0)[1];

    for (let i = 0; i < len; i++) {
      const [node, no] = nodes.pop();

      // 为了防止编号增长过大，超出 MAX_SAFE_NUMER, 重新编号
      let nextNo = no - firstNo;

      node.left && nodes.unshift([node.left, 2 * nextNo + 1]);
      node.right && nodes.unshift([node.right, 2 * nextNo + 2]);
    }

    if (nodes.length > 0) {
      // 同层最后一个节点编号 - 首个节点编号，再 +1，就是宽度
      r = Math.max(r, Math.abs(nodes.at(-1)[1] - nodes.at(0)[1]) + 1);
    }
  }

  return r;
};


// const tree = createTree([1]);
// const r = widthOfBinaryTree(tree); // 1
const tree = createTree([1, 3, 2, 5, 3, null, 9]);
const r = widthOfBinaryTree(tree); // 4
// const tree = createTree([1,3,2,5]);
// const r = widthOfBinaryTree(tree); // 3
// const tree = createTree([1,3,2,5,null,null,9,6,null,7]);
// const r = widthOfBinaryTree(tree); // 7
console.log(r);
