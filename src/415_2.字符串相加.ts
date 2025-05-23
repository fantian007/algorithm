function addStrings(num1: string, num2: string): string {
  let r = '';
  let c = 0;

  const len = Math.max(num1.length, num2.length);
  let i = len - 1;

  // 补前缀 0，使长度相同
  num1 = num1.padStart(len, '0');
  num2 = num2.padStart(len, '0');

  while (i >= 0) {
    const s = c + parseInt(num1[i]) + parseInt(num2[i]);

    c = Math.floor(s / 10);
    r = Math.floor(s % 10) + r;

    i--;
  }

  return c === 0 ? r : c + r;
};

console.log(addStrings('128', '13'));
