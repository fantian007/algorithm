function monotoneIncreasingDigits(n: number): number {
  const chars = n
    .toString()
    .split("")
    .map((m) => parseInt(m));
  const len = chars.length;

  // 如果前一位比当前位大，那么记录当前位下标
  // 前一位要减1，当前位以及后面的数都变成 9
  let f = Infinity;

  for (let i = len - 1; i > 0; i--) {
    if (chars[i - 1] > chars[i]) {
      chars[i - 1] -= 1;
      f = i;
    }
  }

  for (let i = f; i < len; i++) {
    chars[i] = 9;
  }

  return parseInt(chars.join(""));
}

// const r = monotoneIncreasingDigits(10); // 9
// const r = monotoneIncreasingDigits(231); // 229
// const r = monotoneIncreasingDigits(11);
const r = monotoneIncreasingDigits(332); // 299
console.log(r);

export {};
