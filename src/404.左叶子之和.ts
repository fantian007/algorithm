import { createTree, TreeNode } from "./BinaryTree";

function sumOfLeftLeaves(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  const nodes: number[] = [];

  const traverse = (node: TreeNode | null, parent: TreeNode | null) => {
    if (!node) {
      return [];
    }

    if (!node.left && !node.right && parent && parent.left === node) {
      nodes.push(node.val);
    }

    const r: TreeNode[] = [];

    r.push(node);
    r.push(...traverse(node.left, node));
    r.push(...traverse(node.right, node));

    return r;
  };

  traverse(root, null);

  return nodes.reduce((a, b) => a + b, 0);
}

const tree = createTree([1, 2, 3, 4, 5, 6]);
const r = sumOfLeftLeaves(tree);
console.log(r);

export {};
