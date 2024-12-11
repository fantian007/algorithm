// 股票就交易一次
function maxProfit(prices: number[]): number {
  // 当前 持有/不持有 股票的最大利润
  const dp: number[][] = new Array(prices.length).fill(0).map((_) => []);

  dp[0][0] = -prices[0];
  dp[0][1] = 0;

  for (let i = 1; i < prices.length; i++) {
    // 昨天就持有/今天买入
    dp[i][0] = Math.max(dp[i - 1][0], -prices[i]); // 注意：不是 dp[i-1][1] - prices[i]，要求只能进行一次交易
    // 昨天就不持有/今天卖出
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i]);
  }

  return dp[prices.length - 1][1];
}

const r = maxProfit([7, 1, 5, 3, 6, 4]);

console.log(r);

export {};
