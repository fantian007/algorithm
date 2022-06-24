/*
 * @lc app=leetcode.cn id=188 lang=typescript
 *
 * [188] 买卖股票的最佳时机 IV
 */

// @lc code=start
function maxProfit(k: number, prices: number[]): number {
  const len = prices.length;
  const max_k = k;

  if (len <= 0) {
    return 0;
  }

  /**
   * 买入/，卖出不同同一天，至少2天，所以最大交易次数是 len / 2,超出这个值，那么就没有约束作用了
   * 所以取理论上最大值 len / 2, 大于这个值的 k, 结果是一样的
   * 
   * 这是为了防止传入的 k 过大，dp table 占用空间过大，内存溢出
   */
  if (max_k > (len / 2)) {
    return maxProfit(Math.floor(len / 2), prices);
  }

  const dp: number[][][] = Array.from({ length: len }, () => Array.from({ length: max_k + 1 }, () => new Array(2).fill(0)));

  for(let i = 0; i < len; i++) {
    for(let k = max_k; k >= 1; k--) {
      if (i - 1 === -1) {
        dp[i][k][0] = 0;
        dp[i][k][1] = -prices[i];

        continue;
      }

      dp[i][k][0] = Math.max(dp[i-1][k][0], dp[i-1][k][1] + prices[i]);
      dp[i][k][1] = Math.max(dp[i-1][k][1], dp[i-1][k-1][0] - prices[i]);
    };
  };

  return dp[len-1][max_k][0];
};
// @lc code=end

