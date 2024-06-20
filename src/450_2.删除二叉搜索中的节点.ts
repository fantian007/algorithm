import { createTree, TreeNode } from "./BinaryTree";

// target - 删除的目标节点
// 将目标节点删除，左子树挂到右子树最左节点下，返回右子树根节点
const deleteOneNode = (target: TreeNode) => {
  if (!target) return target;
  if (!target.right) return target.left;

  let cur = target.right;
  while (cur.left) {
    cur = cur.left;
  }

  cur.left = target.left;

  return target.right;
};

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  if (!root) {
    return null;
  }

  let parent = null;
  let cur = root;

  // 寻找目标节点 cur
  while (cur) {
    if (cur.val === key) break;
    else {
      parent = cur;

      if (cur.val > key) cur = cur.left;
      else cur = cur.right;
    }
  }

  // 只有头节点，则删除
  if (!parent) {
    return deleteOneNode(root);
  }
  // 区分左右子树
  else {
    if (parent.left === cur) {
      parent.left = deleteOneNode(cur);
    }
    if (parent.right === cur) {
      parent.right = deleteOneNode(cur);
    }
  }

  return root;
}

// const tree = createTree([5, 3, 6, 2, 4, null, 7]);
// const r = deleteNode(tree, 5);
// const r = deleteNode(tree, 3);
// const r = deleteNode(tree, 7);

// const tree = createTree([0]);
// const r = deleteNode(tree, 0);

const tree = createTree([50, 30, 70, null, 40, 60, 80]);
const r = deleteNode(tree, 50);

console.log(r);

export {};
