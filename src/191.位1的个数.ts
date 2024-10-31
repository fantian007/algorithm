function hammingWeight(n: number): number {
  // 转二进制
  const s = n.toString(2);

  // 删除0，剩下的都是 1，取个数
  return s.replaceAll('0', '').length;
};

export {}
