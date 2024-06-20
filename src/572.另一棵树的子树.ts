import { createTree, TreeNode } from "./BinaryTree";

function isSame(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  if (!root && !subRoot) {
    return true;
  }

  if (root && !subRoot) {
    return false;
  }

  if (!root && subRoot) {
    return false;
  }

  if (root.val !== subRoot.val) {
    return false;
  }

  return isSame(root.left, subRoot.left) && isSame(root.right, subRoot.right);
}

const traverse = (root: TreeNode | null): TreeNode[] => {
  if (!root) {
    return [];
  }

  const r: TreeNode[] = [];

  r.push(root);
  r.push(...traverse(root.left));
  r.push(...traverse(root.right));

  return r;
};

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  const nodes: TreeNode[] = traverse(root);

  let find = false;

  for (const node of nodes) {
    if (isSame(node, subRoot)) {
      find = true;
      break;
    }
  }

  return find;
}

const tree1 = createTree([3, 4, 5, 1, 2]);
const tree2 = createTree([4, 1, 2]);
const r = isSubtree(tree1, tree2);
console.log(r);

export {};
