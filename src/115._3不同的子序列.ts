/**
 * @see https://leetcode.cn/problems/distinct-subsequences/solutions/661537/shou-hua-tu-jie-xiang-jie-liang-chong-ji-4r2y/
 */
function numDistinct(s: string, t: string): number {

  // dp[i][j]: s 截取 [0, i-1], t 截取 [0, j-1]，s 子序列中 t 出现的个数
  const dp: number[][] = new Array(s.length + 1).fill(0).map(_ => new Array(t.length + 1).fill(0));

  // t 为空串，s 去匹配 t 的方式视为 1 种
  for (let i = 0; i <= s.length; i++) {
    dp[i][0] = 1;
  };

  // dp 相当于 递归的顺序解法
  for (let i = 1; i <= s.length; i++) {
    for (let j = 1; j <= t.length; j++) {
      if (s[i - 1] === t[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    };
  };

  return dp[s.length][t.length];
};

// const r = numDistinct('rabbbit', 'rabbit'); // 3
const r = numDistinct('babgbag', 'bag'); // 5

console.log(r);

export {

}
