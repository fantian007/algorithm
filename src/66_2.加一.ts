function plusOne(digits: number[]): number[] {
  let c = 0;
  let sum = 0;

  for (let i = digits.length - 1; i >= 0; i--) {
    sum = digits[i] + c;

    // 最后一位 +1
    if (i === digits.length - 1) {
      sum += 1;
    }

    c = Math.floor(sum / 10);

    digits[i] = sum % 10;
  }

  // 有遗留进位，直接放前面
  if (c) {
    digits.unshift(c);
  }

  return digits;
};

const digits = [1, 2, 3]
// const digits = [4, 3, 2, 1];
// const digits = [9];
const r = plusOne(digits);
console.log(r);

export { }
