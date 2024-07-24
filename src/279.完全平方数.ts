// @see https://programmercarl.com/0279.%E5%AE%8C%E5%85%A8%E5%B9%B3%E6%96%B9%E6%95%B0.html#javascript
// 牛啊，不用判断某个数是否是完全平方数，只要按照 dp 的定义计算即可
function numSquares(n: number): number {
  // dp[j]: 和为 j 的完全平方数个数
  // 求最少，初始化为最大数
  const dp: number[] = new Array(n + 1).fill(Infinity);

  dp[0] = 0; // 假设 dp[0] 不知道初始化什么值，但我们知道 dp[1] 应该等于 1，反推
  // dp[1] = min(Infinity, dp[0] + 1) = 1; 反推 dp[0] 应该等于 0

  for (let i = 1; i <= n; i++) {
    for (let j = Math.pow(i, 2); j <= n; j++) {
      // Math.min
      dp[j] = Math.min(dp[j], dp[j - Math.pow(i, 2)] + 1);
    }
  }

  return dp[n];
}

const r = numSquares(12); // 4 + 4 + 4
console.log(r);

export {};
