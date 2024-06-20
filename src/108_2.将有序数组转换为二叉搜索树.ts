import { TreeNode } from "./BinaryTree";

// 迭代法
function sortedArrayToBST(nums: number[]): TreeNode | null {
  const len = nums.length;

  if (len === 0) {
    return null;
  }

  const root = new TreeNode(0);
  // 存放节点
  const nodeQueue = [root];
  // 存放每一个节点对应的区间左边界（和节点顺序对应）
  const leftQueue = [0];
  // 存放每一个节点对应的区间右边界（和节点顺序对应）
  const rightQueue = [len - 1];

  while (nodeQueue.length) {
    const curNode = nodeQueue.pop();
    const left = leftQueue.pop();
    const right = rightQueue.pop();
    const mid = Math.floor(left + (right - left) / 2);

    curNode.val = nums[mid];

    // 终止条件
    if (left < mid) {
      curNode.left = new TreeNode(0);

      nodeQueue.push(curNode.left);
      leftQueue.push(left);
      rightQueue.push(mid - 1);
    }

    // 终止条件
    if (right > mid) {
      curNode.right = new TreeNode(0);

      nodeQueue.push(curNode.right);
      leftQueue.push(mid + 1);
      rightQueue.push(right);
    }
  }

  return root;
}

const r = sortedArrayToBST([-10, -3, 0, 5, 9]);

console.log(r);

export {};
