import { createTree, TreeNode } from "./BinaryTree";

function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
  if (!root) {
    // 返回创建的新节点
    return new TreeNode(val);
  }

  let parent = null;
  let cur = root;

  //   寻找合适的叶子节点
  while (cur) {
    parent = cur;
    if (val < cur.val) {
      cur = cur.left;
    } else {
      cur = cur.right;
    }
  }

  //   在叶子节点的左/右 空位置处挂载新节点
  if (val < parent.val) {
    parent.left = new TreeNode(val);
  } else {
    parent.right = new TreeNode(val);
  }

  return root;
}

const tree = createTree([4, 2, 7, 1, 3]);
const r = insertIntoBST(tree, 5);
console.log(r);

export {};
