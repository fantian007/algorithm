function addStrings(num1: string, num2: string): string {
  let i: number = num1.length - 1;
  let j: number = num2.length - 1;
  let c: number = 0;
  let r: string = '';

  while (i >= 0 || j >= 0 || c > 0) {
    let sum: number = c;

    // num1, num2 的相加逻辑分开写，不写一起，就避免了循环结束后，需要单独处理 num1 或 num2 的剩余部分
    if (i >= 0) {
      sum += parseInt(num1[i]);
      i--;
    }

    if (j >= 0) {
      sum += parseInt(num2[j]);
      j--;
    }

    c = Math.floor(sum / 10);
    r = (sum % 10).toString() + r;
  }

  return r;
}

export {}
