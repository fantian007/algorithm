
function maxProfit(prices: number[]): number {
  // 当前 持有/不持有 股票的最大利润
  const dp: number[][] = new Array(prices.length).fill(0).map(_ => []);

  dp[0][0] = -prices[0];
  dp[0][1] = 0;

  for (let i = 1; i < prices.length; i++) {
    // 第 i 天 持有
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i]);
    // 第 i 天不持有
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i]);
  };

  return dp[prices.length - 1][1];
}

const r = maxProfit([7, 1, 5, 3, 6, 4]);
// const r = maxProfit([1, 2, 3, 4, 5]);
console.log(r);

export { };
