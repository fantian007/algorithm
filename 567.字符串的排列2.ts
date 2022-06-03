/*
 * @lc app=leetcode.cn id=567 lang=typescript
 *
 * [567] 字符串的排列
 */

// @lc code=start
function checkInclusion(s1: string, s2: string): boolean {
  let left = 0;
  let right = 0;
  let valid = 0;
  const window = {};
  const needs = {};

  // 初始化 needs
  for (let i = 0; i < s1.length; i++) {
    const char = s1.charAt(i);
    (needs[char] ? needs[char]++ : needs[char] = 1);
  }
  const keysLen = Object.keys(needs).length;

  while (right < s2.length) {
    const rv = s2[right];

    right++;

    if (needs[rv]) {
      (window[rv] ? window[rv]++ : window[rv] = 1);

      if (window[rv] === needs[rv]) {
        valid++;
      }
    }

    while (valid === keysLen) {
      if (right - left === s1.length) {
        return true;
      }

      const lv = s2[left];

      left++;

      if (needs[lv]) {
        if (window[lv] === needs[lv]) {
          valid--;
          window[lv]--;
        } else {
          window[lv]--;

          if (window[lv] === 0) {
            valid--;
          }
        }
      }
    }
  }

  return false;
};
// @lc code=end

