function lengthOfLongestSubstring(s: string): number {
  // 窗口
  let win = {};
  // 左边界
  let left = 0;
  // 右边界
  let right = 0;
  // 最长子串长度
  let maxLen = 0;

  while (right < s.length) {
    const rv = s[right];

    // (win[rv] ? win[rv]++ : win[rv] = 1);
    // 等同于
    win[rv] ??= 0;
    win[rv]++;

    // 右指针移动
    right++;

    // 如果窗口中有重复字符，固定右边界，不断收缩左边界
    // win[rv] 一直是2，从 left 一路减，减到 c 位置，win[rv] = 1 停止
    // { a: 1, b: 1, c: 2, d: 1 } 变为 { a: 0, b: 0, c: 1, ... }
    while (win[rv] > 1) {
      const lv = s[left];
      win[lv]--;
      left++;
    }

    // 每次循环，刷新最大值
    maxLen = Math.max(maxLen, right - left);
  }

  return maxLen;
};

// const r = lengthOfLongestSubstring('abcabcbb'); // 3
// const r = lengthOfLongestSubstring('bbbbb'); // 1
// const r = lengthOfLongestSubstring("dvdf"); // 3
const r = lengthOfLongestSubstring("abcdc"); // 4
console.log(r);

export { }
