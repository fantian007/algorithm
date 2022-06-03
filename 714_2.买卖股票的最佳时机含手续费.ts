/*
 * @lc app=leetcode.cn id=714 lang=typescript
 *
 * [714] 买卖股票的最佳时机含手续费
 */

// @lc code=start
function maxProfit(prices: number[], fee: number): number {
  const len  = prices.length;

  // dp_i_0 赋值之前代表 dp[i-1][0], 赋值之后代表 dp[i][0]
  let dp_i_0;
  // 同上
  let dp_i_1;

  for(let i = 0; i < len; i++) {
    if (i - 1 === -1) {
      dp_i_0 = 0;
      dp_i_1 = -prices[i];

      continue;
    }

    dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i] - fee);
    dp_i_1 = Math.max(dp_i_1, dp_i_0 - prices[i]);
  };

  return dp_i_0;
};
// @lc code=end

