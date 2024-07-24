/**
 * 没太懂
 * dp[i-j] * j
 * (i-j) * j
 * @see https://programmercarl.com/0343.%E6%95%B4%E6%95%B0%E6%8B%86%E5%88%86.html#%E6%80%9D%E8%B7%AF
 */
function integerBreak(n: number): number {
  // dp[i]：拆分之后的多个数值，和为 i，最大乘积为 dp[i]
  const dp: number[] = new Array(n + 1).fill(0);

  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 1;

  /**
   * 先拆成2个数相乘，至少2个数才能表达出 和、乘 的关系
   * 拆为 j,(i-j), 那么 和 = i, 乘 = j * (i - j)
   * dp[i-j] 代表：和为 i-j, 最大乘积是 dp[i-j]
   * 所以，对于 j * (i-j)：j * dp[i-j] 相当于拆分了 (i-j) 为多个数，和依然为 i。dp[i-j] 是 i-j 拆分后乘积最大，但是再乘以 j，不一定是 i 拆分后的最大乘积。
   * 现在我们有 3 个数，之前计算出来的 dp[i], 以及 j*(i-j)，j*dp[i-j]，这3个数之中取最大值
   */
  for (let i = 3; i <= n; i++) {
    for (let j = 0; j <= i; j++) {
      dp[i] = Math.max(dp[i], Math.max(j * (i - j), j * dp[i - j]));
    }
  }

  return dp[n];
}

const r = integerBreak(5);
console.log(r);

export {};
