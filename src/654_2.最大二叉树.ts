import { createTree, TreeNode } from "./BinaryTree";

function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
  /**
   * 每次递归不创建新的左右数组，记录入参数组开始/结束下标，直接在原数组上截取
   * @param leftIndex - 入参数组开始下标
   * @param rightIndex - 入参数组结束下标
   * @returns - 子树 root
   */
  const traverse = (leftIndex: number, rightIndex: number) => {
    if (leftIndex > rightIndex) {
      return null;
    }

    const arr = nums.slice(leftIndex, rightIndex + 1);

    const max = Math.max(...arr);
    const maxIndex = nums.findIndex((f) => f === max);

    const root = new TreeNode(max);

    root.left = traverse(leftIndex, maxIndex - 1);
    root.right = traverse(maxIndex + 1, rightIndex);

    return root;
  };

  return traverse(0, nums.length - 1);
}

const r = constructMaximumBinaryTree([3, 2, 1, 6, 0, 5]);
console.log(r);

export {};
