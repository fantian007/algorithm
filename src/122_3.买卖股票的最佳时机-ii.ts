// 假如第 0 天买入，第 3 天卖出，那么利润为：prices[3] - prices[0]
// 相当于(prices[3] - prices[2]) + (prices[2] - prices[1]) + (prices[1] - prices[0])
// 同一天卖出和买入，相当于没花钱
// 计算出几个值之间的差值，然后只对 正数差值 求和
function maxProfit(prices: number[]): number {
  const diff = [];

  for (let i = 1; i < prices.length; i++) {
    diff.push(prices[i] - prices[i - 1]);
  }

  return diff.filter((f) => f > 0).reduce((a, b) => a + b, 0);
}

const r = maxProfit([7, 1, 5, 10, 6, 4]);
console.log(r);

export {};
