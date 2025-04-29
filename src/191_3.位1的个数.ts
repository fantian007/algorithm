// https://leetcode.cn/problems/number-of-1-bits/?envType=study-plan-v2&envId=top-interview-150

/**
 * 思路：不断将一串二进制数中的最后一个 1 变为 0，当串中都为 0 时，循环结束，记录变换的次数就是 1 的个数
 * 
 * n & (n - 1)：其中 n - 1 之后，最后一位要么就是 0变1，要么 1变0，同时还需要向前面借位，前面的数也是 1变0,0变1，直到遇到一个1，将1变为0之后，借位结束
 * 所以，n - 1 其实就是将原数的最后一个 1 变为 0，然后将该位置后面的 0 或者 1 互换
 * 那么 n & (n - 1) 其实就是 将 n 的数字串中最后一个 1 变为 0
 */
function hammingWeight(n: number): number {
  let r = 0;

  while (n) {
    // 不断将最后一个 1 变为 0，最终全为 0
    n &= n - 1;
    // 变了多少次，就有多少个 1
    r++;
  }

  return r;
};

console.log(hammingWeight(20));


export { }
