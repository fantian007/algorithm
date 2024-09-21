function isHappy(n: number): boolean {
  // 求和方法
  const getSum = (n: number) => {
    let sum = 0;

    while (n) {
      sum += (n % 10) ** 2;
      n = Math.floor(n / 10);
    }

    return sum;
  };

  // 记录出现过的数值
  const m = new Map<number, number>();

  while (!m.has(n)) {
    m.set(n, 1);
    const sum = getSum(n);

    if (sum === 1) {
      return true;
    }

    n = sum;
  }

  return false;
}

// console.log(isHappy(19));
console.log(isHappy(2));
