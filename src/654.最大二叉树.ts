import { createTree, TreeNode } from "./BinaryTree";

function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
  if (nums.length === 1) {
    return new TreeNode(nums[0]);
  }

  const max = Math.max(...nums);
  const maxIndex = nums.findIndex((f) => f === max);

  const left = nums.slice(0, maxIndex);
  const right = nums.slice(maxIndex + 1, nums.length);

  const root = new TreeNode(max);

  if (left.length) {
    root.left = constructMaximumBinaryTree(left);
  }

  if (right.length) {
    root.right = constructMaximumBinaryTree(right);
  }

  return root;
}

const r = constructMaximumBinaryTree([3, 2, 1, 6, 0, 5]);
console.log(r);

export {};
