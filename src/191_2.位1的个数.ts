// 位运算，遍历 计算 1 的个数
function hammingWeight(n: number): number {
  let r = 0;

  for (let i = 0; i < 32; i++) {
    // 1 左移 i 位，和 n 做 与运算（对应位置上为 1，则 r + 1）
    if (n & (1 << i)) {
      r++;
    }
  }

  return r;
};

export { }
