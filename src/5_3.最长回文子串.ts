// 动规
function longestPalindrome(s: string): string {
  const n = s.length;

  // 边界条件
  if (n <= 1) {
    return s;
  }

  // dp[i][j]: [i][j] 范围是否回文
  const dp: number[][] = new Array(n).fill(0).map(_ => new Array(n).fill(0));

  // 左边界
  let l = 0;
  // 右边界
  let r = 0;
  // 回文字符串长度
  let maxLen = 0;

  // 边界条件已经处理了 j = 0 的情况了，这里从 1 开始
  for (let j = 1; j < n; j++) {
    // 单个字母一定是回文（二维数组对角线）
    dp[j][j] = 1;

    for (let i = 0; i < j; i++) {
      // 如果两侧字符相同，并且
      // 1. j-i <= 2 代表 a, aa, aba 这种情况，一定是回文
      // 2. 除去两侧字符，dp[i+1][j-1] 中间部分是回文，那么整体是回文
      if (s[i] === s[j] && (j - i <= 2 || dp[i + 1][j - 1] === 1)) {
        dp[i][j] = 1;

        if (j - i > maxLen) {
          maxLen = j - i;
          l = i;
          r = j;
        }
      }
    };
  };

  return s.slice(l, r + 1);
};

// const r = longestPalindrome('babad');
const r = longestPalindrome('cbbd');
console.log(r);

export { };

