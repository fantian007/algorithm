// 股票就交易一次
function maxProfit(prices: number[]): number {
  let r = 0;

  // 求一个数和后面所有数的间距，取最大间距
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      r = Math.max(r, prices[j] - prices[i]);
    }
  }

  return r;
}

const r = maxProfit([7, 1, 5, 3, 6, 4]);

console.log(r);

export {};
