// https://leetcode.cn/problems/bitwise-and-of-numbers-range/?envType=study-plan-v2&envId=top-interview-150

// 找 left, right 公共前缀，中间的数不用考虑了，非公共前缀部分 & 结果都是 0
function rangeBitwiseAnd(left: number, right: number): number {
  let shift = 0;

  // 当 left === right 时，找到了公共前缀，停止循环
  while (left < right) {
    left >>= 1;
    right >>= 1;

    shift++;
  }

  // right 只剩公共前缀部分了，然后再左移 shift 位，恢复到原来的位置，右侧补 0
  return right <<= shift;
};

// const r = rangeBitwiseAnd(5, 7); // 4
const r = rangeBitwiseAnd(1, 1); // 1
console.log(r);

export { }
