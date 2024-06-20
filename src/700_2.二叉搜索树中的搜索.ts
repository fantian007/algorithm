import { createTree, TreeNode } from "./BinaryTree";


function searchBST(root: TreeNode | null, val: number): TreeNode | null {
    if (!root) {
      return null;
    }

    const queue: TreeNode[] = [root];

    while (queue.length) {
      const len = queue.length;

      for (let i = 0; i < len; i++) {
        const node = queue.shift();

        if (node.val === val) {
          return node;
        }

        node.left && queue.push(node.left);
        node.right && queue.push(node.right);
      }
    }

    return null;
};

const tree1 = createTree([4,2,7,1,3]);
const r = searchBST(tree1, 2);
console.log(r);

export {};
