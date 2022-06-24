/*
 * @lc app=leetcode.cn id=76 lang=typescript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
function minWindow(s: string, t: string): string {
  let left = 0;
  let right = 0;
  let valid = 0;
  let start = 0;
  let len = Number.MAX_SAFE_INTEGER;

  const window = {};
  const needs = {};

  for (let i = 0; i < t.length; i++) {
    const char = t.charAt(i);

    (needs[char] ? needs[char]++ : needs[char] = 1);
  }

  const needsKeysCnt = Object.keys(needs).length;

  while (right < s.length) {

    /**
     * 先取值，后 ++ 相当于 [left, right) 左闭右开
     */
    const rv = s.charAt(right);
    
    right++;

    if (needs[rv]) {
      (window[rv] ? window[rv]++ : window[rv] = 1);

      if (window[rv] === needs[rv]) {
        valid++;
      }
    }

    while (valid === needsKeysCnt) {
      // 记录窗口最小宽度
      if (right - left < len) {
        start = left;
        len = right - left;
      }

      const lv = s.charAt(left);

      left++;

      if (needs[lv]) {
        if (window[lv] === needs[lv]) {
          window[lv]--;
          valid--;
        } else {
          window[lv]--;

          if (window[lv] === 0) {
            valid--;
          }
        }
      }
    }
  }

  return len === Number.MAX_SAFE_INTEGER ? '' : s.substr(start, len);
};
// @lc code=end

