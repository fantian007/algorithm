// https://leetcode.cn/problems/bitwise-and-of-numbers-range/?envType=study-plan-v2&envId=top-interview-150
// 找 left, right 公共前缀，非公共前缀部分 & 结果都是 0
function rangeBitwiseAnd(left: number, right: number): number {
  let shift = 0;

  while (left < right) {
    left >>= 1;
    right >>= 1;

    shift++;
  }

  return right <<= shift;
};

// const r = rangeBitwiseAnd(5, 7); // 4
const r = rangeBitwiseAnd(1, 1); // 1
console.log(r);

export { }
