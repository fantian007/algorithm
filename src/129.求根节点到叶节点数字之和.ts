import { TreeNode, createTree } from './BinaryTree';


function sumNumbers(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  const path: string[] = [];

  const traverse = (node: TreeNode, s: string) => {
    // 叶子节点，将路径字符串放入 数组
    if (!node.left && !node.right) {
      path.push(s);
      return;
    }

    if (node.left) {
      traverse(node.left, s + node.left.val);
    }

    if (node.right) {
      traverse(node.right, s + node.right.val);
    }
  }

  traverse(root, root.val.toString());

  // 数组求和
  let s = 0;
  for (let i = 0; i < path.length; i++) {
    s += Number(path[i]);
  };

  return s;
};

const tree = createTree([1, 2, 3]);
const r = sumNumbers(tree);
console.log(r);

export { };
