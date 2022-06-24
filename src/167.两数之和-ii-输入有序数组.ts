/*
 * @lc app=leetcode.cn id=167 lang=typescript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
function twoSum(numbers: number[], target: number): number[] {
  const n = numbers.length;
  let left = 0;
  let right = n - 1;

  while (left < right) {
    const r = numbers[left] + numbers[right];

    if (r > target) {
      right--;
    } else if (r < target) {
      left++;
    } else {
      return [left + 1, right + 1];
    }
  }
  return [-1, -1];
};
// @lc code=end

