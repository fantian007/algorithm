// 滑动窗口
function longestPalindrome(s: string): string {
  if (s.length <= 1) {
    return s;
  }

  const n = s.length;

  let left = 0;
  let right = 0;

  // 窗口
  let d = [-1, -1];
  // 窗口最大宽度
  let max = 0;

  for (let i = 0; i < n; i++) {
    left = right = i;

    // 要考虑 s[i] 和旁边元素相同的情况
    while (--left && s[left] === s[i]); // 不需要函数体
    while (++right && s[right] === s[i]);

    // 然后再比较两侧元素
    while (left >= 0 && right <= n - 1 && s[left] === s[right]) {
      left--;
      right++;
    }

    // 记录最大窗口
    if (right - left > max) {
      max = right - left;
      d = [left + 1, right - 1];
    }
  };

  return s.slice(d[0], d[1] + 1); // slice 截取区间 [left, right)，所以 right + 1
};

const r = longestPalindrome('babad');
// const r = longestPalindrome('cbbd');
console.log(r);

export { };
