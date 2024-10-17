import { TreeNode } from "./BinaryTree";

/**
 * 类似二分法，不断取中点，左侧的构建左子树，右侧的构右子树
 */
function sortedArrayToBST(nums: number[]): TreeNode | null {
  if (nums.length === 0) {
    return null;
  }

  const center = Math.floor(nums.length / 2);
  const node = new TreeNode(nums[center]);

  node.left = sortedArrayToBST(nums.slice(0, center));
  node.right = sortedArrayToBST(nums.slice(center + 1, nums.length));

  return node;
}

const r = sortedArrayToBST([-10, -3, 0, 5, 9]);

console.log(r);

export { };
