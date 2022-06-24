/*
 * @lc app=leetcode.cn id=344 lang=typescript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  const n = s.length;
  let left = 0;
  let right = n - 1;

  while (left < right) {
    const tmp = s[right];

    s[right] = s[left];

    s[left] = tmp;

    left++;
    right--;
  }
};
// @lc code=end

