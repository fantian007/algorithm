/*
 * @lc app=leetcode.cn id=714 lang=typescript
 *
 * [714] 买卖股票的最佳时机含手续费
 */

// @lc code=start
function maxProfit(prices: number[], fee: number): number {
  const len  = prices.length;

  const dp: number[][] = Array.from({ length: len }, () => new Array(2).fill(0));

  for(let i = 0; i < len; i++) {
    if (i - 1 === -1) {
      dp[i][0] = 0;
      dp[i][1] = -prices[i];

      continue;
    }

    // 买入 -》 卖出 完整过程 才需要手续费，所以在卖出的时候从利润减去手续费
    dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i] - fee);
    dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0] - prices[i]);
  };

  return dp[len-1][0];
};
// @lc code=end

