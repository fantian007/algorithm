/*
 * @lc app=leetcode.cn id=309 lang=typescript
 *
 * [309] 最佳买卖股票时机含冷冻期
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  const len = prices.length;

  // dp_i_0 赋值之前代表 dp[i-1][0], 赋值之后代表 dp[i][0]
  let dp_i_0 = 0;
  // 意义同上
  let dp_i_1 = -prices[0];
  // 代表冷冻期利润
  let dp_i_prev = 0;

  for(let i = 0; i < len; i++) {
    // const tmp = dp[i-1][0]
    // 冷冻期利润等于 i-1 天的利润，这里暂存为 i-1 利润
    const tmp = dp_i_0;

    dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i]);
    dp_i_1 = Math.max(dp_i_1, dp_i_prev - prices[i]);

    // 第 i 天状态了，但是之前冷冻期利润保持不变，重置
    dp_i_prev = tmp;
  }

  return dp_i_0;
};
// @lc code=end

