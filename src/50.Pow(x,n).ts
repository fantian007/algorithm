/**
 * 快速幂
 * 
 * 1. 2^5 = 2 * ((((2)^2)^2)^2)^2
 * 2. 由上，x 一直乘以 x, 相当于 n 每次除以 2
 * 3. 注意：n 为奇数时，剩余一个 x
 * 4. 2^-3 相当于 1/2 的 3 次方
 */
function myPow(x: number, n: number): number {
  // 边界
  if (x === 0) return 0;

  let r = 1;

  // n 为负数，转换为 (1/x)^(-n)
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }

  // 循环，n 不断除以 2
  while (n > 0) {
    /**
     * n & 1 相当于 n % 2
     * 奇数，需要将剩余的 x 乘入 r
     */
    if ((n & 1) === 1) r *= x;

    // x 不断的乘以 x
    x *= x;
    // Math.floor(n / 2)
    n >>>= 1;
  }

  return r;
}

// const r = myPow(2.00000, -2); // 0.25
// const r = myPow(2.00000, -2147483648); // 0
// const r = myPow(2.00000, 5); // 32
const r = myPow(2.00000, 4); // 16
console.log(r);

export { }
