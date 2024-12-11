function maxProfit(prices: number[]): number {
  const len = prices.length;

  let dp_i_0 = 0;
  let dp_i_1 = -prices[0];

  for (let i = 1; i < len; i++) {
    dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i]);
    dp_i_1 = Math.max(dp_i_1, dp_i_0 - prices[i]);
  };

  /**
   * 我们一直在求最大值
   * 所以最后一个手里无股票的情形下利润是最大的
   */
  return dp_i_0;
};

export {}
