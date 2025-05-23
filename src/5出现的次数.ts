// 求小于 n 的自然数中，5 的出现次数

// 方法一
function countFives(n: number): number {
  let count = 0;

  for (let i = 0; i < n; i++) {
    let num = i;

    while (num > 0) {
      if (num % 10 === 5) {
        count++;
      }

      num = Math.floor(num / 10);
    }
  }

  return count;
}

// 方法二
function countFivesMath(n: number): number {
  let count = 0;

  for (let digit = 1; digit < n; digit *= 10) {
    const high = Math.floor(n / (digit * 10));
    const current = Math.floor(n / digit) % 10;
    const low = n % digit;

    if (current < 5) {
      count += high * digit;
    } else if (current === 5) {
      count += high * digit + low + 1;
    } else {
      count += (high + 1) * digit;
    }
  }

  return count;
}

export {}
