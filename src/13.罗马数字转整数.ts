// 将对应字符转数字，放到一个数组中
// 遍历数组，如果当前数小于后面的数，那么当前数 * -1，相当于后面的数 - 当前数
function romanToInt(s: string): number {
  const m = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
  const n = [1, 5, 10, 50, 100, 500, 1000];

  const r: number[] = [];

  for (const c of s) {
    const i = m.findIndex(f => f === c);
    r.push(n[i]);
  }

  console.log(r);

  for (let i = 0; i < r.length - 1; i++) {
    if (r[i] < r[i + 1]) {
      r[i] *= -1;
    }
  }

  return r.reduce((a, b) => a + b);
};
