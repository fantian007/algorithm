function maxProfit(prices: number[]): number {
  let have = -prices[0];
  let notHave = 0;

  for(let i = 1; i < prices.length; i++) {
    have = Math.max(have, notHave - prices[i]);
    notHave = Math.max(notHave, have + prices[i]);
  };

  return notHave;
}

// const r = maxProfit([7, 1, 5, 3, 6, 4]); // 7
const r = maxProfit([1, 2, 3, 4, 5]); // 4
console.log(r);

export { };
