// 贪心：取左边最小值，遍历过程中 不断计算 最大差值（前提：只交易一次）
// 左边越小，差值会越大。左边只管往小了取，过程中不断更新最大差值。
function maxProfit(prices: number[]): number {
  let min = Infinity;
  let maxDiff = 0;

  for (let i = 0; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    maxDiff = Math.max(maxDiff, prices[i] - min);
  };

  return maxDiff;
}

const r = maxProfit([7, 1, 5, 3, 6, 4]); // 5

console.log(r);

export { };
