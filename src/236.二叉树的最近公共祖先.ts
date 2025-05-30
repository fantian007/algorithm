import { createTree, TreeNode } from "./BinaryTree";

/**
 * 递归有2种返回结果：
 * 1. 找到 p 或者 q 就返回 （进递归前判断）
 * 2. 找到 最近祖先节点 返回 （递归回溯时判断）
 * 递归回溯时，会从状态 1 转为状态 2，最终返回的是 最近总共祖先
 */
function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  // 只要其中一个节点是根，那么共同父节点一定就是 该节点
  if (root === p || root === q || root === null) {
    return root;
  }

  // 左子树 里找最近父节点
  const left = lowestCommonAncestor(root.left, p, q);
  // 右子树 里找最近父节点
  const right = lowestCommonAncestor(root.right, p, q);

  // 1. p, q 在 root 的两侧，那么 root 就是最近的父节点
  if (left && right) return root;
  // 2. p,q 都在 root 的左侧(回溯的过程中始终会走到 1，中间会得到共同父节点)
  else if (left) return left;
  // 3. 同上
  else if (right) return right;
  // 4. 左右都没找到，返回 null
  else return null;

  // 简化写法
  // if (l && r) return root;
  // return l || r;
}

const tree = createTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]);
const r = lowestCommonAncestor(tree, tree.left.left, tree.left.right);
console.log(r); // 5

export {};
