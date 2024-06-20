export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  next: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null, next?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
  }
}

export const createTree = (arr: (number | null)[]) => {
  const nodes: (TreeNode | null)[] = [];

  arr.forEach((v) => {
    if (v !== null) {
      nodes.push(new TreeNode(v));
    } else {
      nodes.push(null);
    }
  });

  let i = 0;
  let left = 1;
  let right = 2;

  while (nodes[i] !== undefined) {
    if (nodes[left] !== undefined && nodes[left] !== null) {
      nodes[i].left = nodes[left];
    }

    if (nodes[right] !== undefined && nodes[right] !== null) {
      nodes[i].right = nodes[right];
    }

    i += 1;
    left = i * 2 + 1;
    right = i * 2 + 2;
  }

  return nodes[0];
};
