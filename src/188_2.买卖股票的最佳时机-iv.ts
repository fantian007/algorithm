// @see https://programmercarl.com/0188.%E4%B9%B0%E5%8D%96%E8%82%A1%E7%A5%A8%E7%9A%84%E6%9C%80%E4%BD%B3%E6%97%B6%E6%9C%BAIV.html#%E6%80%9D%E8%B7%AF
function maxProfit(k: number, prices: number[]): number {
  // 奇数是买入，偶数是卖出
  const dp: number[][] = new Array(prices.length).fill(0).map(_ => new Array(2 * k + 1).fill(0));

  for (let i = 1; i < 2 * k + 1; i++) {
    if (i % 2 === 1) {
      dp[0][i] = -prices[0];
    }
  };


  for (let i = 1; i < prices.length; i++) {
    // 什么都没干
    dp[i][0] = dp[i - 1][0];
    // 第一次买入
    dp[i][1] = Math.max(dp[i - 1][1], -prices[i]);

    for (let j = 2; j < 2 * k + 1; j++) {
      if (j % 2 === 1) {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - 1] - prices[i]);
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - 1] + prices[i]);
      }
    };
  };

  return dp[prices.length - 1][2 * k];
};

// const r = maxProfit(2, [2, 4, 1]); // 2
const r = maxProfit(2, [3, 2, 6, 5, 0, 3]); // 7
console.log(r);

export { };

