// 思路：将出现过的数放入 map, 当后续出现的数在 map 内，说明死循环了，返回 false. 不死循环就一直计算。
function isHappy(n: number): boolean {
  // 求和方法
  const getSum = (n: number) => {
    let sum = 0;

    while (n) {
      // 最后一位的平方
      sum += (n % 10) ** 2;
      // 去除最后一位
      n = Math.floor(n / 10);
    }

    return sum;
  };

  // 记录出现过的数值
  const m = new Map<number, number>();

  while (!m.has(n)) {
    m.set(n, 1);

    n = getSum(n);

    if (n === 1) {
      return true;
    }
  }

  return false;
}

// console.log(isHappy(19));
console.log(isHappy(2));
