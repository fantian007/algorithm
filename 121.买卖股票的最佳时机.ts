/*
 * @lc app=leetcode.cn id=121 lang=typescript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
// 优化 dp 空间
/**
 * 状态 -》做选择 -》新的状态
 * 
 * dp 存储状态
 * 状态转移方程代表做了什么选择，转变成新状态
 */
function maxProfit(prices: number[]): number {
  // 状态转移方程

  /**
   * 解释：第 i 天 手里没有股票
   * 1. 第 i-1 天手里就没有，然后啥也没干，第 i 天依然没有
   * 2. 第 i-1 天手里有股票，卖了赚钱了，第 i 天手里就没有了
   */
  // dp[i][0] = max(dp[i-1][0], dp[i-1][1] + prices[i])

  /**
   * 解释：第 i 天 手里有股票
   * 1. 第 i-1 天手里就有股票，啥也没干，第 i 天手里依然有
   * 2. 第 i-1 天手里没有股票，花钱买股票了，第 i 天手里就有了股票
   */
  // dp[i][1] = max(dp[i-1][1], dp[i-1][0] - prices[i])
  // 因为 i-1 天手里没有股票，说明之前没做过交易，所以 i-1 天是利润为 0，简化
  // dp[i][1] = max(dp[i-1][1], 0 - prices[i])

  const len = prices.length;

  // dp_i_0 赋值之前代表 dp[i-1][0], 赋值之后代表 dp[i][0]
  let dp_i_0;
  // 同上
  let dp_i_1;

  for (let i = 0; i < len; i++) {
    // 边界情况
    if (i - 1 === -1) {
      dp_i_0 = 0;
      dp_i_1 = -prices[i];
    }

    dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i]);
    dp_i_1 = Math.max(dp_i_1, -prices[i]);
  };

  /**
   * 我们一直在求最大值
   * 所以最后一个手里无股票的情形下利润是最大的
   */
  return dp_i_0;
};
// @lc code=end

