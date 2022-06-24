/*
 * @lc app=leetcode.cn id=123 lang=typescript
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  // 状态转移方程
  // dp[i][2][0] = max(dp[i-1][2][0], dp[i-1][2][1] + price[i]); // 卖股票无需检查 k
  // dp[i][2][1] = max(dp[i-1][2][1], dp[i-1][1][0] - price[i]);
  // dp[i][1][0] = max(dp[i-1][1][0], dp[i-1][1][1] + price[i]);
  // dp[i][1][1] = max(dp[i-1][1][1], dp[i-1][0][0] - price[i]); // dp[i-1][0][0] 代表最多累计 0 次交易，所以利润为0，dp[i-1][0][0] = 0;

  const len = prices.length;

  // 赋值之前 第i-1天、允许交易最大次数1、手里无股票
  // 赋值之后 第i天、允许交易最大次数1、手里无股票
  let dp_i10 = 0;
  let dp_i11 = -prices[0];
  let dp_i20 = 0;
  let dp_i21 = -prices[0];

  for(let i = 0; i < len; i++) {
    dp_i20 = Math.max(dp_i20, dp_i21 + prices[i]);
    dp_i21 = Math.max(dp_i21, dp_i10 - prices[i]);
    dp_i10 = Math.max(dp_i10, dp_i11 + prices[i]);
    dp_i11 = Math.max(dp_i11, 0 - prices[i]);
  };

  return dp_i20;
};
// @lc code=end

