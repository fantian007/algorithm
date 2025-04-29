/**
 * 一个数末尾的 0 是由因子 2 和因子 5 相乘得到的。
 * 在 n!（n 的阶乘）中，因子 2 的数量通常远多于因子 5 的数量，所以 n! 末尾 0 的个数取决于其中因子 5 的个数。
 * 因此，我们只需要找出 1 到 n 中所有能被 5 整除的数，统计它们包含因子 5 的总个数，就能得到 n! 末尾 0 的个数。
 */
function trailingZeroes(n: number): number {
  let r = 0;

  // 能被 5 整除的数（注意：外层循环要从 5 开始）
  for (let i = 5; i <= n; i += 5) {
    // 该数包含因子 5 的个数（注意中间是取余）
    for (let x = i; x % 5 === 0; x /= 5) {
      r++;
    };
  };

  return r;
};

const r = trailingZeroes(3);
console.log(r);

export { }
