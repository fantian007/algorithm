/**
 * 使用递归方式计算 x^n
 */
const xn = (x: number, n: number) => {
  if (n === 1) {
    return x;
  }

  return xn(x, n - 1) * x;
};

const r = xn(5, 3);

console.log(r);
