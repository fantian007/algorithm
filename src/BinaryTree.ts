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
  const nodes: (TreeNode | null)[] = arr.map(v => v === null ? null : new TreeNode(v));

  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    
    if (!node) continue;

    const j = 2 * i + 1;
    const k = 2 * i + 2;

    node.left = nodes[j] ?? null;
    node.right = nodes[k] ?? null;
  }

  return nodes.at(0);
};
