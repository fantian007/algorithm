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

    (win[rv] ? win[rv]++ : win[rv] = 1);
    // 每次循环，right + 1
    right++;

    // 如果窗口中有重复字符，固定右边界，不断收缩左边界
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
const r = lengthOfLongestSubstring("dvdf"); // 3
console.log(r);

export { }
