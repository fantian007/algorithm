import { createTree, TreeNode } from "./BinaryTree";

/**
 * 关键：p 或者 q 是一个子树的根节点，那么该 根节点 就是公共祖先 节点
 * 1. 从左右子树中找公共祖先，如果分布在左右子树，那么当前节点 就是公共祖先
 * 2. 如果都在左子树，最近的公共祖先不一定是当前节点，如果保证得到最近的公共节点?
 *     那就是一旦中间递归时找到了最近公共节点，那就不要做其它操作，直接向上层返回
 * 3. 如果都在右子树，同上
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
