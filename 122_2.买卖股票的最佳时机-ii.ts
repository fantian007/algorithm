/*
 * @lc app=leetcode.cn id=122 lang=typescript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  
  const len = prices.length;

  let dp_i_0;
  let dp_i_1;

  for (let i = 0; i < len; i++) {
    // 边界情况
    if (i - 1 === -1) {
      dp_i_0 = 0;
      dp_i_1 = -prices[i];
    }

    dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i]);
    dp_i_1 = Math.max(dp_i_1, dp_i_0 - prices[i]);
  };

  /**
   * 我们一直在求最大值
   * 所以最后一个手里无股票的情形下利润是最大的
   */
  return dp_i_0;
};
// @lc code=end

