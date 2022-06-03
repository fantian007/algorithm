/*
 * @lc app=leetcode.cn id=438 lang=typescript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
function findAnagrams(s: string, p: string): number[] {
  // 异位词，就是排列啊
  const res: number[] = [];

  let left = 0;
  let right = 0;
  let valid = 0;
  const needs = {};
  const window = {};

  for (let i = 0; i < p.length; i++) {
    const char = p.charAt(i);

    (needs[char] ? needs[char]++ : needs[char] = 1);
  }
  const keysLen = Object.keys(needs).length;

  while (right < s.length) {
    const rv = s[right];

    right++;

    if (needs[rv]) {
      (window[rv] ? window[rv]++ : window[rv] = 1);

      if (window[rv] === needs[rv]) {
        valid++;
      }
    }

    while (valid === keysLen) {
      if (right - left === p.length) {
        res.push(left);
      }

      const lv = s[left];

      left++;

      if (needs[lv]) {
        if (needs[lv] === window[lv]) {
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

  return res;
};
// @lc code=end

