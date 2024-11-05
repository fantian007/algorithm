// https://leetcode.cn/problems/single-number-ii/solutions/746993/zhi-chu-xian-yi-ci-de-shu-zi-ii-by-leetc-23t6/?envType=study-plan-v2&envId=top-interview-150
// https://leetcode.cn/problems/single-number-ii/

// 对每位的 1 的数量求和，然后每位 1 的数量对 3 取余数，剩下的就是 出现一次数字 的位值
function singleNumber(nums: number[]): number {
  let r = 0;

  for (let i = 0; i < 32; i++) {
    let t = 0;

    // 统计第 i 位的 1 的个数
    for (const n of nums) {
      // n 右移 i 位，和 1 与
      t += ((n >> i) & 1);
    };

    //（余数不可能出现 2，除非有出现2次的数字）
    // 对 3 取余不为 0，那么 r 的第 i 位就是 1
    if (t % 3 !== 0) {
      // 将 r 的第 i 位设置为 1
      r |= (1 << i);
    }
  };

  return r;
};

const r = singleNumber([2, 2, 3, 2, 6, 6, 6]);
// 010
// 010
// 010
// 011
// ---
// 041
console.log(r);

export { }
