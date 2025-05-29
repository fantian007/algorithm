function generatePrimes (n: number): number[] {
  if (n <= 2) return [];

  const r = new Array(n).fill(true);

  r[0] = r[1] = false;

  for(let i = 2; i <= Math.sqrt(n); i++) {
    if (r[i]) {
      // 如果 i 是质数，那么 i 的倍数一定不是质数
      // i * x(比 i 小) 在遍历 x 的时候(x * i) 已经算过了，所以直接从 i * i 开始算，
      for(let j = i * i; j < n; j += i) {
        r[j] = false;
      };
    }
  };

  return r.map((f, i) => f ? i : null).filter(f => f !== null);
}

console.log(generatePrimes(10)); // 输出: [2, 3, 5, 7]
console.log(generatePrimes(20)); // 输出: [2, 3, 5, 7, 11, 13, 17, 19]
console.log(generatePrimes(2));  // 输出: []