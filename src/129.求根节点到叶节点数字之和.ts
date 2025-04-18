import path = require('path');
import { TreeNode, createTree } from './BinaryTree';


function sumNumbers(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  let r = 0;

  const traverse = (node: TreeNode, s: string) => {
    // 叶子节点
    if (!node.left && !node.right) {
      r += parseInt(s);
    }

    node.left && traverse(node.left, s + node.left.val);
    node.right && traverse(node.right, s + node.right.val);
  }

  traverse(root, root.val.toString());

  return r;
};

const tree = createTree([1, 2, 3]);
const r = sumNumbers(tree);
console.log(r);

export { };
