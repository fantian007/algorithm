/**
 * @see [438.找到字符串中所有字母异位词](./438.找到字符串中所有字母异位词.ts)
 */
function minWindow(s: string, t: string): string {
  let left = 0;
  let right = 0;
  let matchKeysLen = 0;
  let start = 0;
  let len = Number.MAX_SAFE_INTEGER;

  const win = {};
  const needs = {};

  for (const c of t) {
    needs[c] ??= 0;
    needs[c]++;
  }
  const needsKeysCnt = Object.keys(needs).length;

  while (right < s.length) {
    /**
     * 先取值，后 ++ 相当于 [left, right) 左闭右开
     */
    const rv = s[right];
    
    right++;

    if (needs[rv]) {
      win[rv] ??= 0;
      win[rv]++;

      if (win[rv] === needs[rv]) {
        matchKeysLen++;
      }
    }

    while (matchKeysLen === needsKeysCnt) {
      // 记录窗口最小宽度
      if (right - left < len) {
        start = left;
        len = right - left;
      }

      const lv = s[left];

      left++;

      if (needs[lv]) {
        if (win[lv] === needs[lv]) {
          win[lv]--;
          matchKeysLen--;
        } else {
          win[lv]--;
        }
      }
    }
  }

  return len === Number.MAX_SAFE_INTEGER ? '' : s.substr(start, len);
};

