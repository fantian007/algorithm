import { TreeNode, createTree } from "./BinaryTree";

function isSymmetric(root: TreeNode | null): boolean {
  if (!root) {
    return true;
  }

  // 使用双端队列，看队列中元素是否左右对称
  const queue: TreeNode[] = [root.left, root.right];

  while (queue.length) {
    const a = queue.shift();
    const b = queue.pop();

    if (!a && !b) {
      continue;
    }

    if (!a || !b) {
      return false;
    }

    if (a.val !== b.val) {
      return false;
    }

    queue.unshift(a.right);
    queue.unshift(a.left);
    queue.push(b.left);
    queue.push(b.right);
  }

  return true;
}

const tree = createTree([1, 2, 2, 3, 4, 4, 3]); // true
// const tree = createTree([1, 2, 2, null, 3, null, 3]);
// const tree = createTree([1, 0]);
// const tree = createTree([1, 2, 3]);

const r = isSymmetric(tree);
console.log(r);

export {};
