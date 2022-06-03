/*
 * @lc app=leetcode.cn id=309 lang=typescript
 *
 * [309] 最佳买卖股票时机含冷冻期
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  const len = prices.length;

  const dp: number[][] = Array.from({ length: len }, () => new Array(2).fill(0));

  for (let i = 0; i < len; i++) {

    // 相当于第1天
    if (i - 1 === -1) {
      // 第一天没有股票，利润为0
      dp[i][0] = 0;
      // 第一天手里有股票，说明花钱买了，利润为 -prices[0]
      dp[i][1] = -prices[i];

      continue;
    };

    if (i - 2 === -1) {
      dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i]);
      dp[i][1] = Math.max(dp[i-1][1], - prices[i]);

      continue;
    }
    
    // 状态转移方程
    dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i]);
    dp[i][1] = Math.max(dp[i-1][1], dp[i-2][0] - prices[i]);
  }

  return dp[len-1][0];
};
// @lc code=end

