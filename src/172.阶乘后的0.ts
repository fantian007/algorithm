/**
 * 假设值 100，尾0 的个数就是 有几个 10 相乘，10 = 2 * 5，其中 2 的个数必然大于 5 的个数
 * 取较小的个数对应的 5，那么结果就是求 n! 中有几个 5 相乘
 * n! = 1 * 2 * 3 * ... * (1 * 5) * ... * (2 * 5) * ... * (3 * 5) ... * n
 * 那么，对于 中间的乘数，可能出现 25 = 5 * 5, 125 = (5 * 5 * 5), ...
 */
function trailingZeroes(n: number): number {
  let r = 0;

  // 遍历单个 5
  for(let i = 0; i <= n; i += 5) {
    // 遍历多个 5
    for(let x = i; x % 5 === 0; x /= 5) {
      r++;
    };
  };

  return r;
};

const r = trailingZeroes(1234);
console.log(r);

export {}
