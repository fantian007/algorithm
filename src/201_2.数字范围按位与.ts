// https://leetcode.cn/problems/bitwise-and-of-numbers-range/?envType=study-plan-v2&envId=top-interview-150
// n & (n - 1) 结果：会将非公共前缀部分的 1 均变为 0
function rangeBitwiseAnd(left: number, right: number): number {
  while (left < right) {
    right &= right - 1;
  }

  return right;
};

const r = rangeBitwiseAnd(5, 7); // 4
// const r = rangeBitwiseAnd(1, 1); // 1
console.log(r);

export { }
