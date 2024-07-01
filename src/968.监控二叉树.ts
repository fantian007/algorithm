import { createTree, TreeNode } from "./BinaryTree";

// 要求摄像头最少，从叶子节点开始向上，叶子节点的父节点安摄像头，后序遍历
// @see https://programmercarl.com/0968.%E7%9B%91%E6%8E%A7%E4%BA%8C%E5%8F%89%E6%A0%91.html#%E5%85%B6%E4%BB%96%E8%AF%AD%E8%A8%80%E7%89%88%E6%9C%AC
function minCameraCover(root: TreeNode | null): number {
  // 0-无覆盖，1-有监控，2-有覆盖
  type Status = 0 | 1 | 2;
  let cnt = 0;

  const traverse = (node: TreeNode | null): Status => {
    if (!node) {
      return 2;
    }

    const left = traverse(node.left);
    const right = traverse(node.right);

    if (left === 0 || right === 0) {
      cnt++;
      return 1;
    } else if (left === 1 || right === 1) {
      return 2;
    } else {
      return 0;
    }
  };

  if (traverse(root) === 0) cnt++;

  return cnt;
}

const tree = createTree([0, 0, null, 0, 0]);
const r = minCameraCover(tree);
console.log(r);

export {};
