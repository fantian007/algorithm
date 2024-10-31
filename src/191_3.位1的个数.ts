// https://leetcode.cn/problems/number-of-1-bits/?envType=study-plan-v2&envId=top-interview-150

// 规律：n & (n - 1) 是把 n 的二进制中最后一个 1 变为 0
function hammingWeight(n: number): number {
  let r = 0;

  while (n !== 0) {
    // 不断将最后一个 1 变为 0，最终全为 0
    n &= n - 1;
    // 变了多少次，就有多少个 1
    r++;
  }

  return r;
};

export { }
