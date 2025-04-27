import { TreeNode } from "./BinaryTree";

// 顺序数组 递归找中点，构建出来的树，就是平衡树
function sortedArrayToBST(nums: number[]): TreeNode | null {
  const len = nums.length;

  if (len === 0) {
    return null;
  }

  const traverse = (left: number, right: number) => {
    if (left > right) {
      return null;
    }

    // left\right 如果非常大，那 left + right 可能超出整数范围，left + (right - left) / 2 超出的概率会小点
    const midIndex = Math.floor(left + (right - left) / 2);

    const node = new TreeNode(nums[midIndex]);

    node.left = traverse(left, midIndex - 1);
    node.right = traverse(midIndex + 1, right);

    return node;
  };

  return traverse(0, len - 1);
}

const r = sortedArrayToBST([-10, -3, 0, 5, 9]);

console.log(r);

export {};
