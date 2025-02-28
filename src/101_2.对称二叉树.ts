import { TreeNode, createTree } from "./BinaryTree";

// 层序遍历 + 判断每层是否对称 优化
function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return false;

  const queue = [root];

  while (queue.length) {
    const len = queue.length;

    for (let i = 0; i < len; i++) {
      const node = queue.shift();

      if (!node) {
        continue;
      }

      // 将 null 节点也收集
      queue.push(node.left);
      queue.push(node.right);
    }

    // 收集完当前层，开始判断是否对称，双指针
    let p1 = 0;
    let p2 = queue.length - 1;

    while (p1 < p2) {
      if (queue[p1]?.val !== queue[p2]?.val) return false;
      p1++;
      p2--;
    }
  }

  return true;
};

const tree = createTree([1, 2, 2, 3, 4, 4, 3]); // true
// const tree = createTree([1, 2, 2, null, 3, null, 3]); // false
// const tree = createTree([1, 0]); // false
// const tree = createTree([1, 2, 3]); // false

const r = isSymmetric(tree);
console.log(r);

export { };
