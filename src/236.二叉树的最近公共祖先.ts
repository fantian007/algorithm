import { createTree, TreeNode } from "./BinaryTree";

/**
 * 整体过程：
 * 1. 开始：在一个节点的左右子树中找 p 或者 q。找到 p 或者 q 就返回，所以回溯结果是 p 或者 q（走下列 if 分支的 2,3）。
 * 2. 递归会持续向上回溯，当回溯到中间某个节点时，发现 p,q 分别在当前节点的左右子树（走到了if分支的 1），那么共同父节点就是 当前节点（到该节点时，改变了回溯向上层返回的值）
 * 3. 回溯继续，此后回溯向上层返回的值不再是 p,q，而是中间结算出的共同父节点
 * 4. 共同父节点会一直向上传递（不再走 if 分支的 1, 始终是 2或者3，所以不会再改变向上返回的值，而是直接返回给上层）
 */
function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (root === p || root === q || root === null) {
    // 找到 p 或者 q, 或者 叶子节点 时停止递归
    return root;
  }

  // 左子树 里找最近父节点
  const left = lowestCommonAncestor(root.left, p, q);
  // 右子树 里找最近父节点
  const right = lowestCommonAncestor(root.right, p, q);

  // 以下就是接收到下层返回的值后，中间回溯处理的逻辑，处理之后的结果，再继续返回给上层（回溯传递的结果，中间会不会被改变，就看下面的逻辑了）

  // 1. p, q 在 root 的两侧，那么 root 就是最近的父节点
  if (left && right) return root;
  // 2. p,q 都在 root 的左侧(回溯的过程中始终会走到 1，中间会得到共同父节点)
  else if (left) return left;
  // 3. 同上
  else if (right) return right;
  // 4. 左右都没找到，返回 null
  else return null;
}

const tree = createTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]);
const r = lowestCommonAncestor(tree, tree.left.left, tree.left.right);
console.log(r); // 5

export {};
