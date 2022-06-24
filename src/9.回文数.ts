/*
 * @lc app=leetcode.cn id=9 lang=typescript
 *
 * [9] 回文数
 */

// @lc code=start
function isPalindrome(x: number): boolean {
  const s = x.toString();
  const n = s.length;
  let left = 0;
  let right = n - 1;

  while (left <= right) {
    if (s[left] !== s[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};

isPalindrome(12)
// @lc code=end

