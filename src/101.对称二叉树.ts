import { TreeNode, createTree } from "./BinaryTree";

function isSymmetric(root: TreeNode | null): boolean {
  if (!root) {
    return true;
  }

  const left = root.left;
  const right = root.right;

  if (!left && !right) {
    return true;
  }

  if (!left || !right) {
    return false;
  }

  // 层序遍历
  const f = (root: TreeNode | null): number[][] => {
    if (!root) {
      return null;
    }

    const queue: TreeNode[] = [root];
    const r: number[][] = [];

    while (queue.length) {
      const len = queue.length;
      const curLevel: number[] = [];

      for (let i = 0; i < len; i++) {
        const node = queue.shift();

        // 将空值放入栈，代表空节点
        curLevel.push(node?.val);

        // 如果是空节点，子节点不继续入栈，否则死循环
        if (!node) {
          continue;
        }

        queue.push(node?.left);
        queue.push(node?.right);
      }

      r.push(curLevel);
    }

    return r;
  };

  // 左右子树各自的层序遍历结果
  const r1 = f(root.left);
  const r2 = f(root.right);

  // 左子树结果从左向右遍历，右子树结果从右向左遍历，判断对称位置的值是否相等
  if (r1.length !== r2.length) {
    return false;
  }

  for (let i = 0; i < r1.length; i++) {
    const k1 = r1[i];
    const k2 = r2[i];

    if (k1.length !== k2.length) {
      return false;
    }

    for (let j = 0; j < k1.length; j++) {
      const a = k1[j];
      const b = k2[k2.length - j - 1];

      if (a !== b) {
        return false;
      }
    }
  }

  return true;
}

// const tree = createTree([1, 2, 2, 3, 4, 4, 3]);
// const tree = createTree([1, 2, 2, null, 3, null, 3]);
const tree = createTree([1, 0]);

const r = isSymmetric(tree);
console.log(r);

export {};
