// 注意：买入+卖出 一套下来 需要支付一笔手续费，所以再卖出时减去 fee
function maxProfit(prices: number[], fee: number): number {
  // 第 i 天 [持有、不持有] 的最大利润
  const dp: number[][] = new Array(prices.length).fill(0).map(_ => new Array(2).fill(0));

  dp[0][0] = -prices[0];
  dp[0][1] = 0;

  for (let i = 1; i < prices.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i] - fee);
  };

  return dp[prices.length - 1][1];
};

const r = maxProfit([1, 3, 2, 8, 4, 9], 2); // 8
console.log(r);

export { }
