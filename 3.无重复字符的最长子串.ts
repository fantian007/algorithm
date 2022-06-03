/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  let left = 0;
  let right = 0;
  let len = 0;
  const window = {};

  while (right < s.length) {
    const rv = s[right];

    (window[rv] ? window[rv]++ : window[rv] = 1);
    right++;

    while (window[rv] > 1) {
      const lv = s[left];
      window[lv]--;

      left++;
    }

    len = Math.max(len, right - left);
  }

  return len;
};
// @lc code=end

