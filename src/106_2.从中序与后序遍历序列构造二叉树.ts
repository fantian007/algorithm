import { TreeNode } from "./BinaryTree";

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  if (postorder.length === 0) {
    return null;
  }

  const c = postorder.pop();
  const i = inorder.findIndex(f => f === c);

  const l = inorder.slice(0, i);
  const r = inorder.slice(i + 1);

  const root = new TreeNode(c);

  // 后序遍历 左右中，里面所有数都可以看做某子树的中节点，排列顺序：所有左子树的中节点，所有右子树的中节点，中节点
  // 所以，要先构建右子树（末尾中节点取出后，紧挨的都是右子树的中节点），否则左区间数组中压根找不到中节点
  if (r.length) {
    root.right = buildTree(r, postorder);
  }

  if (l.length) {
    root.left = buildTree(l, postorder);
  }

  // 不能按以下方式简化了，因为必须先构建右子树
  // 由于 postorder 是 pop 操作，按左右中顺序，优先 pop 出的是 右子树 的中节点，所以优先构建右子树
  // 以下方式会优先构建左子树
  // return new TreeNode(center, buildTree(l, postorder), buildTree(r, postorder));

  return root;
};

// const r = buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3]);
const r = buildTree([2, 1], [2, 1]);
console.log(r);

export { };
