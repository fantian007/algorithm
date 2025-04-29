function hammingWeight(n: number): number {
  let r = 0;

  while (n) {
    // 判断最后一位是否为1
    if ((n & 1)) {
      r++;
    }

    // 右移，去掉最后一位
    n >>= 1;
  }

  return r;
};
