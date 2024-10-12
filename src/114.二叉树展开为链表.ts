import { TreeNode, createTree } from "./BinaryTree";

// 前序遍历 + 保留头结点 + 构造新节点（非原地操作）
function flatten(root: TreeNode | null): void {
  // 前序遍历
  const preorder = (node: TreeNode | null) => {
    if (!node) {
      return [];
    }

    let r: number[] = [node.val];

    if (node.left) {
      r = r.concat(preorder(node.left));
    }

    if (node.right) {
      r = r.concat(preorder(node.right));
    }

    return r;
  }

  // 前序遍历数组
  const r = preorder(root);

  if (r.length) {
    // 保留头部节点引用
    root.left = null;
    root.val = r[0];
    let cur = root;

    for (let i = 1; i < r.length; i++) {
      // 其它节点新创建
      const node = new TreeNode(r[i], null);
      cur.right = node;
      cur = cur.right;
    };
  }
};

// const tree = createTree([1, 2, 5, 3, 4, null, 6]);
const tree = createTree([0]);
flatten(tree);
console.log(tree);

export { }
