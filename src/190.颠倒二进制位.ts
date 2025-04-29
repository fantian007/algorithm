// https://leetcode.cn/problems/reverse-bits/solutions/1720079/by-1105389168-qbt1/?envType=study-plan-v2&envId=top-interview-150
// https://leetcode.cn/problems/reverse-bits/solutions/686465/yi-ti-san-jie-dui-cheng-wei-zhu-wei-fen-ub1hi/?envType=study-plan-v2&envId=top-interview-150
// 颠倒：整体翻转
function reverseBits(n: number): number {
  let r = 0;

  // 入参是 32 位无符号整数，颠倒数字
  for (let i = 0; i < 32; i++) {
    // r 左移一位，空出的位置放 n 的最后一位
    // n & 1 取 n 的最后一位
    // r 左移一位，末尾补 0，| 符号相当于相加，等同：r = r << 1; const last = n & 1; r += last;
    r = r << 1 | (n & 1);

    // n 右移一位，等同移除最后一位
    n >>= 1;
  };

  // 无符号右移(>> 是有符号右移)，题目要求入参是无符号，出参也是无符号
  return r >>> 0;
};

// 二进制要以 0b 开头
// const r = reverseBits(0b00000010100101000001111010011100);
const r = reverseBits(0b11111111111111111111111111111101);
console.log(r);

export { }
