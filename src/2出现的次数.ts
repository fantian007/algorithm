// @see https://leetcode.cn/problems/number-of-2s-in-range-lcci/

function numberOf2sInRange(n: number): number {
  let count = 0;
  for (let i = 1; i <= n; i *= 10) {
    const high = Math.floor(n / (i * 10));
    const current = Math.floor(n / i) % 10;
    const low = n % i;

    if (current < 2) {
      count += high * i;
    } else if (current === 2) {
      count += high * i + low + 1;
    } else {
      count += (high + 1) * i;
    }
  }

  return count;
}

export { }
