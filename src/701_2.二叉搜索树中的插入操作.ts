import { createTree, TreeNode } from "./BinaryTree";

function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
  if (!root) {
    // 返回创建的新节点
    return new TreeNode(val);
  }

  let parent: TreeNode | null = null;

  // 递归法，其实和迭代法逻辑一样
  const traverse = (cur: TreeNode | null, val: number) => {
    if (!cur) {
      const node = new TreeNode(val);

      if (val > parent.val) parent.right = node;
      else parent.left = node;
      // 记得要 return 终止后面逻辑执行
      return;
    }

    parent = cur;

    if (val < cur.val) traverse(cur.left, val);
    else traverse(cur.right, val);
  };

  traverse(root, val);

  return root;
}

const tree = createTree([4, 2, 7, 1, 3]);
const r = insertIntoBST(tree, 5);
console.log(r);

export {};
