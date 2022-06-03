/*
 * @lc app=leetcode.cn id=122 lang=typescript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  
  const len = prices.length;
  const dp: number[][] = Array.from({ length: len }, () => new Array(2).fill(0));


  for (let i = 0; i < len; i++) {
    
    // 边界情况
    if (i - 1 === -1) {
      dp[i][0] = 0;
      // 花钱买了第一天的股票
      dp[i][1] = -prices[i];

      continue;
    }

    dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i]);
    dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0] /** 和 121 不同点在这，不再是0 */ - prices[i]);
  };

  /**
   * 我们一直在求最大值
   * 所以最后一个手里无股票的情形下利润是最大的
   */
  return dp[len-1][0];
};
// @lc code=end

