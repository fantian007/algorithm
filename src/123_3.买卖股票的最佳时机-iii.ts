function maxProfit(prices: number[]): number {
  /**
   * 几个状态: d[i][j], j 取值 0-4, 代表以下 5 个状态
   * 到了 第 i 天 什么都还没干
   * 第 i 天第 1 次持有股票
   * 第 i 天第 1 次不持有股票
   * 第 i 天第 2 次持有股票
   * 第 i 天第 2 次不持有股票
   */
  const dp: number[][] = new Array(prices.length).fill(0).map(_ => new Array(5).fill(0));

  dp[0][0] = 0;
  dp[0][1] = -prices[0];
  dp[0][2] = 0;
  dp[0][3] = -prices[0];
  dp[0][4] = 0;

  for (let i = 1; i < prices.length; i++) {
    // 什么都没干
    dp[i][0] = 0;
    // 第一次持有
    dp[i][1] = Math.max(dp[i - 1][1], -prices[i]);
    // 第一次不持有
    dp[i][2] = Math.max(dp[i - 1][2], dp[i - 1][1] + prices[i]);
    // 第二次持有
    dp[i][3] = Math.max(dp[i - 1][3], dp[i - 1][2] - prices[i]);
    // 第二次不持有
    dp[i][4] = Math.max(dp[i - 1][4], dp[i - 1][3] + prices[i]);
  };

  return dp[prices.length - 1][4];
};

// const r = maxProfit([3, 3, 5, 0, 0, 3, 1, 4]); // 6
// const r = maxProfit([1, 2, 3, 4, 5]); // 4
const r = maxProfit([2, 1, 4, 5, 2, 9, 7]); // 11
console.log(r);

export { };

