// 版本一
const fibnacci = (n: number) => {

  if (n <= 0) return 0;
  if (n === 1) return 1;

  return fibnacci(n - 1) + fibnacci(n - 2);
}

// 版本二
const fibnacciV2 = (a: number, b: number, n: number) => {

  if (n <= 0) return 0;
  if (n < 3) return 1;
  if (n === 3) return a + b;

  return fibnacciV2(a, a + b, n - 1);
}

// 1,2,3,5,8,13 => 31
console.log(fibnacciV2(6));
