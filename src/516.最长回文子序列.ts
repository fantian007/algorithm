/**
 * https://programmercarl.com/0516.%E6%9C%80%E9%95%BF%E5%9B%9E%E6%96%87%E5%AD%90%E5%BA%8F%E5%88%97.html#%E6%80%9D%E8%B7%AF
 */
function longestPalindromeSubseq(s: string): number {
  // 字符串在 [i, j] 范围内最长回文子序列长度
  const dp = new Array(s.length).fill(0).map(_ => new Array(s.length).fill(0));

  /**
   * 自底向上，自左向右 遍历
   * dp[i][j] 的值依赖于 dp[i+1][j-1], dp[i][j-1], dp[i+1][j]，dp 表格里面左下角、左、下 的值（决定遍历顺序）
   * 区间定义是 [i][j]，当 j < i，不是有效区间，初始化为 0
   * 当 i === j 时（dp 对角线），代表是单个字符，回文长度 = 1
   * 当 i > j 时，走递推公式
   */
  for (let i = 0; i < s.length; i++) {
    // 对角线值初始化为 1
    dp[i][i] = 1;
  };

  // 从 dp 递推公式看，自底向上，自左向右 遍历
  for (let i = s.length - 1; i >= 0; i--) {
    // 已经初始化 i===j 时，dp[i][j] = 1，所以 j 从 i + 1 开始'
    for (let j = i + 1; j < s.length; j++) {
      if (s[i] === s[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2; // i,j 处的 2 个字符
      } else {
        /**
         * dp 本质就是遍历所有情况，如果 s[i] 不等于 s[j]，那么 dp[i][j] 就是 [i, j] 范围字符串除去其中一个端点的字符串的最大长度，也就是 [i, j) 或者 (i, j] 
         * 除去两边的端点，有2种情况： dp[i+1][j], dp[i][j-1]
         */
        dp[i][j] = Math.max(dp[i][j - 1], dp[i + 1][j]);
      }
    };
  };

  // 按照 dp 数组的定义，这里应该取 [0, len-1] 区间（整个字符串）的值
  return dp[0][s.length - 1];
};

const r = longestPalindromeSubseq('bbbab'); // 4
// const r = longestPalindromeSubseq('cbbd'); // 2
console.log(r);

export { }

