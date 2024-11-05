function plusOne(digits: number[]): number[] {
  // 非 9，直接 +1，可以返回了
  // 是 9，+1 之后该位 = 0，那么下一位判断同理
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0;
      continue;
    }

    // +1
    digits[i] += 1;

    // 最前面一位不是 9，不会发生进位，直接返回
    return digits;
  };

  // 能走到这，说明数组遍历完毕，最前面一位之前是 9，+1 之后变 0，发生了进位，前面需要拼接 1
  return [1].concat(digits);
};

const digits = [1, 2, 3]
// const digits = [4, 3, 2, 1];
// const digits = [9];
const r = plusOne(digits);
console.log(r);

export { }
